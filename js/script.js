$(document).ready(function () {
  // Efek 'scrolled' pada navbar saat halaman di-scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });

  // Smooth scrolling untuk link navigasi
  $(".nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70, // -70 untuk offset dari navbar
        },
        800
      );
    }
  });

  // Memuat header
  $("#header-placeholder").load("./components/header.html");

  // Memuat footer
  $("#footer-placeholder").load("./components/footer.html");

  // 6. Validasi Formulir Kontak
  /*$("#contact-form").on("submit", function (event) {
    event.preventDefault(); // Mencegah form submit secara default

    var nama = $("#nama").val().trim();
    var email = $("#email").val().trim();
    var pesan = $("#pesan").val().trim();
    var isValid = true;
    var feedbackMessage = "";

    // Validasi Nama
    if (nama === "") {
      isValid = false;
      $("#nama").addClass("is-invalid");
    } else {
      $("#nama").removeClass("is-invalid").addClass("is-valid");
    }

    // Validasi Email
    if (email === "" || !validateEmail(email)) {
      isValid = false;
      $("#email").addClass("is-invalid");
    } else {
      $("#email").removeClass("is-invalid").addClass("is-valid");
    }

    // Validasi Pesan
    if (pesan === "") {
      isValid = false;
      $("#pesan").addClass("is-invalid");
    } else {
      $("#pesan").removeClass("is-invalid").addClass("is-valid");
    }

    // Tampilkan feedback ke pengguna
    var feedbackDiv = $("#form-feedback");
    if (isValid) {
      feedbackMessage =
        '<div class="alert alert-success" role="alert">Terima kasih! Pesan Anda telah berhasil dikirim.</div>';
      // Kosongkan form setelah berhasil
      $("#contact-form")[0].reset();
      $(".form-control").removeClass("is-valid");
    } else {
      feedbackMessage =
        '<div class="alert alert-danger" role="alert">Ups! Mohon isi semua kolom dengan benar.</div>';
    }

    feedbackDiv.html(feedbackMessage);

    // Hapus feedback setelah beberapa detik
    setTimeout(function () {
      feedbackDiv.html("");
    }, 5000);
  });*/

  // Fungsi helper untuk validasi format email
  function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
