import React from "react";

// Fungsi sanitasi untuk membersihkan teks dari karakter berbahaya
function sanitizeInput(input) {
  // Fungsi ini dapat disesuaikan sesuai kebutuhan Anda.
  // Contoh sederhana: mengganti tanda kurung siku < dan > dengan HTML entities
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const Contact = () => {
  // Fungsi untuk meng-handle pengiriman formulir
  function handleSubmit(e) {
    e.preventDefault();

    // Mendapatkan data dari elemen textarea dengan nama "message"
    const messageTextArea = document.querySelector('textarea[name="message"]');
    const inputName = document.querySelector('input[name="name"]');
    const inputTelp = document.querySelector('input[name="phone"]');
    const inputMail = document.querySelector('input[name="email"]');
    const inputSubject = document.querySelector('input[name="subject"]');

    // Mendapatkan teks yang dimasukkan oleh pengguna
    const messageText = messageTextArea.value;
    const inputN = inputName.value;
    const inputT = inputTelp.value;
    const inputM = inputMail.value;
    const inputS = inputSubject.value;

    // Melakukan sanitasi data sebelum menampilkannya di tampilan web
    const sanitizedMessage = sanitizeInput(messageText);
    const sanitizedName = sanitizeInput(inputN);
    const sanitizedTelp = sanitizeInput(inputT);
    const sanitizedMail = sanitizeInput(inputM);
    const sanitizedSubject = sanitizeInput(inputS);

    // Sekarang Anda dapat menggunakan sanitizedMessage untuk menampilkan teks yang sudah disanitasi dalam tampilan Anda
    console.log("Pesan nya:", sanitizedMessage);
    console.log("Nama nya:", sanitizedName);
    console.log("Telp nya:", sanitizedTelp);
    console.log("email nya:", sanitizedMail);
    console.log("subject nya:", sanitizedSubject);

    // Lakukan langkah-langkah lainnya seperti mengirimkan data formulir
    fetch("https://getform.io/f/d30a1944-4b2b-44ee-a006-384d9522bc21", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `message=${encodeURIComponent(
        sanitizedMessage
      )}&name=${encodeURIComponent(sanitizedName)}&phone=${encodeURIComponent(
        sanitizedTelp
      )}&email=${encodeURIComponent(
        sanitizedMail
      )}&subject=${encodeURIComponent(sanitizedSubject)}`,
    })
      .then((response) => {
        alert("Apakah data nya sudah benar!!");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // Menggunakan .text() bukan .json()
      })
      .then((data) => {
        // Tanggapan dari server (getform.io) dalam bentuk teks (misalnya: "Terima kasih!")
        console.log("Tanggapan server:", data);

        // Di sini Anda dapat mengecek data untuk menentukan apakah pengiriman berhasil atau tidak.
        if (data.includes("thank-you")) {
          window.location.href = "https://getform.io/thank-you";
          // Pengiriman berhasil, Anda dapat memberikan umpan balik positif kepada pengguna.
        } else {
          const alertElement = document.createElement("div");
          alertElement.className =
            "fixed inset-0 flex items-center justify-center z-50";
          alertElement.innerHTML = `
          <div class="  bg-emerald-800/70 backdrop-blur-md text-white p-4 rounded-lg shadow-lg animate-bounce md:text-4xl text-base text-center">
           Mohon Maaf kaya nya Formnya udah kepenuhan :V !!
          </div>
        `;

          // Menambahkan elemen pesan alert ke dalam elemen DOM
          document.body.appendChild(alertElement);
          // Pengiriman gagal atau terdapat pesan kesalahan, Anda dapat memberikan umpan balik negatif atau menampilkan pesan kesalahan.
        }
      })
      .catch((error) => {
        // Jika ada kesalahan dalam pengiriman atau tanggapan tidak berhasil
        console.error("lah error:", error);

        // Membuat elemen HTML dengan pesan alert kustom menggunakan kelas-kelas Tailwind
        const alertElement = document.createElement("div");
        alertElement.className =
          "fixed inset-0 flex items-center justify-center z-50";
        alertElement.innerHTML = `
          <div class="  bg-emerald-800/70 backdrop-blur-md text-white p-4 rounded-lg shadow-lg animate-bounce md:text-4xl text-base text-center">
           Cek Koneksi Internet nya Bang !!
          </div>
        `;

        // Menambahkan elemen pesan alert ke dalam elemen DOM
        document.body.appendChild(alertElement);

        // Anda dapat memberikan umpan balik kepada pengguna tentang kegagalan pengiriman.
      });
  }
  return (
    <div
      id="contact"
      className=" m-auto bg-sky/60 backdrop-blur-sm p-4 py-8 relative bg-sky-700/60"
    >
      <div className="max-w-[1024px] mx-auto ">
        <h1 className="md:text-4xl text-xl tracking-wide font-bold text-center text-white z-10 px-6 py-2  inset-x-[15%] w-fit mx-auto ">
          Fell free to Contact me
        </h1>
      </div>

      <form
        action="https://getform.io/f/d30a1944-4b2b-44ee-a006-384d9522bc21"
        method="POST"
        encType="multipart/form-data"
        className="formInput max-w-[768px] mx-auto rounded-lg p-5"
        autoComplete="off"
        onSubmit={handleSubmit} // Menyambungkan fungsi handleSubmit ke acara onSubmit formulir
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <h1 className="uppercase text-sm py-2">Name</h1>
            <input
              maxLength={30}
              className="rounded-xl p-3 border-slate-300 border-[1px] flex focus:bg-emerald-400 focus:ring-1 focus:outline-none
          focus:border-emerald-500 focus:ring-emerald-700"
              placeholder="Input Your name"
              autoComplete="off"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <h1 className="uppercase text-sm py-2">Phone Number</h1>
            <input
              maxLength={14}
              className="rounded-xl p-3 border-slate-300 border-[1px] flex focus:bg-emerald-400 focus:ring-1 focus:outline-none
          focus:border-emerald-500 focus:ring-emerald-700"
              placeholder="Example : 0812-345-67890 (use dash)"
              type="tel"
              name="phone"
              autoComplete="off"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{5}"
              required
            />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <h1 className="uppercase text-sm py-2">Email</h1>
          <input
            maxLength={30}
            className=" rounded-xl p-3 border-slate-300 border-[1px] focus:ring-1 focus:outline-none focus:bg-emerald-400 focus:border-emerald-500 focus:ring-emerald-700"
            placeholder="Example : emailbos@domainbos.com"
            type="email"
            autoComplete="off"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <h1 className="uppercase text-sm py-2">Subject</h1>
          <input
            maxLength={15}
            className="rounded-xl p-3 border-slate-300 border-[1px]  focus:ring-1 focus:outline-none focus:bg-emerald-400 focus:border-emerald-500 focus:ring-emerald-700"
            placeholder="Input your subject"
            type="text"
            autoComplete="off"
            name="subject"
            required
          />
        </div>

        <div className="flex flex-col py-2">
          <h1 className="uppercase text-sm py-2">Message</h1>
          <textarea
            name="message"
            id=""
            cols={5}
            rows="2"
            maxLength={200}
            className="text-slate-800 border-slate-300 border-[3px] rounded-lg p-3 focus:bg-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-emerald-700"
            placeholder="Maximum 150 word /submit button bellow this box"
            autoComplete="off"
          ></textarea>
        </div>

        <button className="bg-sky-500 text-white text-xl mt-3 px-10 py-1 rounded-lg flex mx-auto w-fit hover:scale-110 hover:text-white hover:bg-emerald-600 active:bg-rose-700  onSubmit={handleSubmit}">
          Submit
        </button>
      </form>
      <div className="">
        <hr />
        <div className="flex justify-center items-center mx-auto p-8 flex-col">
          <a
            href="mailto:nazirsyah18@gmail.com"
            className="text-sm text-sky-600 px-2 py-1 bg-sky-950 rounded-xl hover:bg-sky-700 hover:text-white hover:scale-105"
          >
            © nazirsyah18@gmail.com
          </a>
          <a
            href="https://wa.me/6285774561015"
            className="text-sky-300 hover:text-white hover:scale-105 tracking-widest text-xs mt-2"
          >
            Contact me
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Contact;
