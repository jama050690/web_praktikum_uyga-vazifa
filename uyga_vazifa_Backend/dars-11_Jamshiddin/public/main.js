const bannerEl = document.getElementById("banner");
const thumbnailsEl = document.getElementById("thumbnails");
const container = document.getElementById("root");
const baseUrl = "http://localhost:3000/photos";

// render Banner
let bannerImages = [];
const BNR_INDEX = "bannerImgIndex";
let bannerImageIndex = getParams().bannerImgIndex - 0 || 0;
const PAGE_BLOCK_SIZE = 10;
const ITEMS_PER_PAGE = 10;
let TOTAL_PAGES = 0;

let albumId = 1;

const changeBannerImage = (index) => {
  if (!bannerImages[index]) return;

  bannerImageIndex = index;

  const item = bannerImages[index];
  bannerEl.innerHTML = `
   <div class="rounded-xl">
  <!-- IMAGE WRAPPER -->
  <div class="overflow-hidden rounded-xl px-[4rem]">
    <img
      src="${item.url}"
      onerror="this.onerror=null; this.src='${item.thumbnailUrl}'"
      class="w-full h-[250px] object-cover rounded-2xl"
    />
  </div>

  <!-- TITLE -->
  <h2 class="my-3 text-black text-xl text-center">
   <b>${item.title}</b>
  </h2>
</div>`;
};

function renderThumbnails(images) {
  thumbnailsEl.innerHTML = "";

  images.forEach((img, i) => {
    const wrapper = document.createElement("div");
    wrapper.className = "text-center";

    const thumb = document.createElement("img");
    thumb.src = img.thumbnailUrl;
    thumb.className = "w-24 h-24 rounded-2xl cursor-pointer";

    const title = document.createElement("p");
    title.textContent = img.title;
    title.className = "text-white text-xs mt-1";

    thumb.onclick = () => {
      changeBannerImage(i);
    };

    wrapper.appendChild(thumb);
    wrapper.appendChild(title);
    thumbnailsEl.appendChild(wrapper);
  });
}

function getCurrentPage() {
  return Number(new URL(location.href).searchParams.get("page")) || 1;
}
function getParams() {
  const url = new URL(window.location.href);
  return {
    albumId: Number(url.searchParams.get("albumId")) || 1,
    page: Number(url.searchParams.get("page")) || 1,
  };
}

const getBannerImages = async () => {
  const page = getCurrentPage();
  albumId = Number(new URL(location.href).searchParams.get("albumId")) || 1;

  await fetch(`http://localhost:3000/photos?page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      bannerImages = data.data;

      TOTAL_PAGES = Math.ceil(data.count / ITEMS_PER_PAGE);

      bannerImageIndex = getParams().bannerImgIndex - 0 || 0;

      changeBannerImage(bannerImageIndex);
      renderThumbnails(bannerImages);
    });
};

async function main() {
  const url = new URL(location.href);
  const page = Number(url.searchParams.get("page")) || 1;

  container.innerHTML = "";
  const ul = createPaginationButtons(TOTAL_PAGES, page);
  container.appendChild(ul);
}
function createPaginationButtons(totalPages, currentPage) {
  const ul = document.createElement("ul");
  ul.className = "pagination";

  const startPage =
    Math.floor((currentPage - 1) / PAGE_BLOCK_SIZE) * PAGE_BLOCK_SIZE + 1;

  const endPage = Math.min(startPage + PAGE_BLOCK_SIZE - 1, totalPages);

  const prevLi = document.createElement("li");
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Prev";
  prevBtn.disabled = startPage === 1;

  prevBtn.onclick = () => {
    location.href = `/public/index.html?&page=${startPage - 1}`;
  };

  prevLi.appendChild(prevBtn);
  ul.appendChild(prevLi);

  for (let i = startPage; i <= endPage; i++) {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.textContent = i;
    if (i === currentPage) btn.className = "current";

    btn.onclick = () => {
      location.href = `/public/index.html?albumId=${albumId}&page=${i}`;
    };

    li.appendChild(btn);
    ul.appendChild(li);
  }

  const nextLi = document.createElement("li");
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.disabled = endPage >= totalPages;

  nextBtn.onclick = () => {
    location.href = `/public/index.html?albumId=${albumId}&page=${endPage + 1}`;
  };

  nextLi.appendChild(nextBtn);
  ul.appendChild(nextLi);

  return ul;
}

await getBannerImages();
main();
