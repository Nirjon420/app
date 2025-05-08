function searchSong() {
  const input = document.getElementById('searchInput').value;
  if (input.trim() === '') {
    alert("মেঘেরা কিছু খুঁজে পেল না... অন্য কিছু চেষ্টা করো?");
  } else {
    alert(`"${input}" - এই শব্দটা দিয়ে ইউটিউব থেকে গান খোঁজা হচ্ছে...`);
  }
}

function playSong() {
  const videoId = "kXYiU_JCYtU"; // উদাহরণ ভিডিও (Linkin Park - Numb)
  const ytFrame = document.getElementById("ytFrame");
  const ytSection = document.getElementById("youtubePlayer");

  ytFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  ytSection.classList.remove("hidden");

  document.getElementById('nowPlaying').innerText = "Numb - Linkin Park";
}
