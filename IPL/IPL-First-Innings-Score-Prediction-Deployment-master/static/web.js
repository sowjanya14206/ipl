<link rel = "stylesheet" href="C:\Users\seela\Downloads\IPL\IPL-First-Innings-Score-Prediction-Deployment-master\static\web.js">

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  
  const offset = -slideIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

// Auto slide
setInterval(showSlides, 5000);

<div class="carousel">
<div class="carousel-inner">
    <div class="carousel-item"><img src="https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/Ipl-auction_1703034762917_1703034773943.jpg" alt="Image 1"></div>
    <div class="carousel-item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUd7OFYn9w6yKSs1JDRuGldRswNFYHRK74iq30vn1A4g&s" alt="Image 2"></div>
    <div class="carousel-item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_Ddtn1V8ZltJwBB7swaukbLRviYpkNyW7ZKxXMCgQQ&s" alt="Image 3"></div>
    <div class="carousel-item"><img src="https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/Ipl-auction_1703034762917_1703034773943.jpg" alt="Image 1"></div>

 <!-- Add more items as needed -->
 </div>
<button class="prev-btn" onclick="prevSlide()">></button>
<button class="next-btn" onclick="nextSlide()"><</button>
</div>

<div class="wavy">
                    <span style="--i:1;">I</span>
                    <span style="--i:2;">N</span>
                    <span style="--i:3;">D</span>
                    <span style="--i:4;">I</span>
                    <span style="--i:5;">A</span>
                    <span style="--i:6;">N</span>
                    <span style="--i:7;"> </span>
                    <span style="--i:8;">P</span>
                    <span style="--i:9;">R</span>
                    <span style="--i:10;">E</span>
                    <span style="--i:11;">M</span>
                    <span style="--i:12;">I</span>
                    <span style="--i:13;">R</span>
                    <span style="--i:14;">E</span>
                    <span style="--i:15;"> </span>
                    <span style="--i:16;">L</span>
                    <span style="--i:17;">E</span>
                    <span style="--i:18;">A</span>
                    <span style="--i:19;">G</span>
                    <span style="--i:20;">U</span>
                    <span style="--i:21;">E</span>
                </div>
