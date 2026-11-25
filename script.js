// Menyimpan status tampilan, specimen terpilih, dan timer animasi yang dipakai bersama.
// Menyimpan nilai yang diperlukan pada variabel activeDinoSlide.
let activeDinoSlide = 0;
// Menyimpan nilai yang diperlukan pada variabel pendingHeroTitleReplay.
let pendingHeroTitleReplay = false;
// Menyimpan nilai yang diperlukan pada variabel activeDetailDinoId.
let activeDetailDinoId = null;
// Menyimpan nilai yang diperlukan pada variabel directoryDinoIds.
let directoryDinoIds = [];
// Menyimpan nilai yang diperlukan pada variabel allDinoNavigationIds.
let allDinoNavigationIds = [];
// Menyimpan nilai yang diperlukan pada variabel dinoCarouselTimer.
let dinoCarouselTimer = null;
// Menyimpan nilai yang diperlukan pada variabel dinoSlideTransitionTimer.
let dinoSlideTransitionTimer = null;
// Menyimpan nilai yang diperlukan pada variabel pageLoaderTimer.
let pageLoaderTimer = null;
// Menyimpan nilai yang diperlukan pada variabel motionRevealObserver.
let motionRevealObserver = null;
// Menyimpan nilai yang diperlukan pada variabel viewSwitchTimer.
let viewSwitchTimer = null;
// Menyimpan nilai yang diperlukan pada variabel viewSwitchGeneration.
let viewSwitchGeneration = 0;
// Menyimpan nilai yang diperlukan pada variabel savedViewKey.
const savedViewKey = 'ingenLibraryView';
// Menyimpan nilai yang diperlukan pada variabel savedDetailKey.
const savedDetailKey = 'ingenLibraryDetail';
// Menyimpan nilai yang diperlukan pada variabel themeStorageKey.
const themeStorageKey = 'ingenLibraryTheme';

// Menjalankan inisialisasi fitur setelah seluruh elemen HTML selesai dimuat.
// Menunggu event browser sebelum menjalankan fungsi penangan.
window.addEventListener('DOMContentLoaded', () => {
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    initializeHeroTitleAnimation();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    initializeThemeToggle();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    initializeDirectoryTransitions();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    initializeMotionReveals();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    initializeComparison();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    initializeNewsStories();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    renderDirectory(dinosaurs);
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    initializeDinoCarousel();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    updateHomepageCounts();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    restoreViewAfterReload();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    hidePageLoader(0, () => {
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        animatePageChrome();
        // Mengambil elemen halaman dan menyimpannya di activeView.
        const activeView = document.querySelector('.view-section.active, .detail-view.active');
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (activeView) {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            animateViewElements(activeView);
        // Menutup blok proses yang dimulai sebelumnya.
        }
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        startHeroVisualAnimations();
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
});

// Memecah judul slideshow menjadi rentang per karakter untuk animasi bertahap.
// Mendefinisikan fungsi initializeHeroTitleAnimation untuk mengelompokkan proses terkait.
function initializeHeroTitleAnimation() {
    // Mengambil elemen halaman dan menyimpannya di heading.
    const heading = document.querySelector('.dino-carousel-title h2');
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!heading) return;

    // Menyimpan nilai yang diperlukan pada variabel words.
    const words = heading.textContent.trim().split(/\s+/);
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    heading.textContent = '';
    // Memperbarui atribut elemen untuk status atau aksesibilitas.
    heading.setAttribute('aria-label', words.join(' '));

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    words.forEach((word, wordIndex) => {
        // Membuat elemen baru dan menyimpannya di wordElement.
        const wordElement = document.createElement('span');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        wordElement.className = 'title-word';
        // Memperbarui atribut elemen untuk status atau aksesibilitas.
        wordElement.setAttribute('aria-hidden', 'true');

        // Mengulangi proses untuk setiap item dalam kumpulan data.
        Array.from(word).forEach((character, characterIndex) => {
            // Membuat elemen baru dan menyimpannya di characterElement.
            const characterElement = document.createElement('span');
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            characterElement.className = 'title-char';
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            characterElement.style.setProperty(
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                '--char-delay',
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                `${wordIndex * 100 + characterIndex * 20}ms`
            // Mengakhiri pemanggilan fungsi atau callback.
            );
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            characterElement.textContent = character;
            // Menambahkan elemen atau isi ke dalam DOM.
            wordElement.appendChild(characterElement);
        // Menutup blok proses yang dimulai sebelumnya.
        });

        // Menambahkan elemen atau isi ke dalam DOM.
        heading.appendChild(wordElement);
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (wordIndex < words.length - 1) {
            // Menambahkan elemen atau isi ke dalam DOM.
            heading.appendChild(document.createTextNode(' '));
        // Menutup blok proses yang dimulai sebelumnya.
        }
    // Menutup blok proses yang dimulai sebelumnya.
    });

// Menutup blok proses yang dimulai sebelumnya.
}

// Memulai ulang animasi karakter pada judul slideshow homepage.
// Mendefinisikan fungsi replayHeroTitleAnimation untuk mengelompokkan proses terkait.
function replayHeroTitleAnimation() {
    // Mengambil elemen halaman dan menyimpannya di heading.
    const heading = document.querySelector('.dino-carousel-title h2');
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!heading) return;

    // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
    heading.classList.remove('is-animating');
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    void heading.offsetWidth;
    // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
    heading.classList.add('is-animating');
// Menutup blok proses yang dimulai sebelumnya.
}

// Menjalankan animasi gambar dan judul saat specimen homepage siap ditampilkan.
// Mendefinisikan fungsi startHeroVisualAnimations untuk mengelompokkan proses terkait.
function startHeroVisualAnimations(replayTitle = false) {
    // Mengambil elemen halaman dan menyimpannya di homeView.
    const homeView = document.getElementById('view-home');
    // Mengambil elemen halaman dan menyimpannya di image.
    const image = homeView.querySelector('.dino-carousel-slide.active img');
    // Mengambil elemen halaman dan menyimpannya di heading.
    const heading = homeView.querySelector('.dino-carousel-title h2');
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!image || !heading) return;

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!image.complete || image.naturalWidth === 0) {
        // Memperbarui nilai variabel atau properti untuk status terbaru.
        pendingHeroTitleReplay = pendingHeroTitleReplay || replayTitle;
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return;
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
    image.classList.add('is-ready');
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        !document.documentElement.classList.contains('page-intro-ready') ||
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        !homeView.classList.contains('active')
    // Mengakhiri pemanggilan fungsi atau callback.
    ) {
        // Memperbarui nilai variabel atau properti untuk status terbaru.
        pendingHeroTitleReplay = pendingHeroTitleReplay || replayTitle;
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return;
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
    image.classList.remove('is-intro-animating');
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    void image.offsetWidth;
    // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
    image.classList.add('is-intro-animating');

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (replayTitle || pendingHeroTitleReplay || !heading.classList.contains('is-animating')) {
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        replayHeroTitleAnimation();
    // Menutup blok proses yang dimulai sebelumnya.
    }
    // Memperbarui nilai variabel atau properti untuk status terbaru.
    pendingHeroTitleReplay = false;
// Menutup blok proses yang dimulai sebelumnya.
}

// Menyembunyikan pemuat halaman, menandai halaman siap, lalu memanggil callback.
// Mendefinisikan fungsi hidePageLoader untuk mengelompokkan proses terkait.
function hidePageLoader(delay = 0, onHidden = () => {}) {
    // Mengambil elemen halaman dan menyimpannya di loader.
    const loader = document.getElementById('pageLoader');
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!loader) {
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        document.body.classList.remove('page-loading');
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        document.documentElement.classList.add('page-intro-ready');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        onHidden();
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return;
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Menghentikan timer agar proses tertunda tidak berjalan.
    window.clearTimeout(pageLoaderTimer);
    // Menjadwalkan proses agar dijalankan setelah jeda atau berulang.
    pageLoaderTimer = window.setTimeout(() => {
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        loader.classList.remove('is-visible');
        // Menjadwalkan proses agar dijalankan setelah jeda atau berulang.
        pageLoaderTimer = window.setTimeout(() => {
            // Memeriksa kondisi sebelum memilih cabang proses.
            if (!loader.classList.contains('is-visible')) {
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                loader.hidden = true;
                // Memperbarui atribut elemen untuk status atau aksesibilitas.
                loader.setAttribute('aria-hidden', 'true');
                // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
                document.body.classList.remove('page-loading');
                // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
                document.documentElement.classList.add('page-intro-ready');
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                onHidden();
            // Menutup blok proses yang dimulai sebelumnya.
            }
        // Menutup blok proses yang dimulai sebelumnya.
        }, 120);
    // Menutup blok proses yang dimulai sebelumnya.
    }, delay);
// Menutup blok proses yang dimulai sebelumnya.
}

// Menghapus status animasi grid setelah animasi hasil direktori selesai.
// Mendefinisikan fungsi initializeDirectoryTransitions untuk mengelompokkan proses terkait.
function initializeDirectoryTransitions() {
    // Mengambil elemen halaman dan menyimpannya di grid.
    const grid = document.getElementById('dinoGrid');
    // Memasang penangan untuk merespons interaksi atau event.
    grid.addEventListener('animationend', event => {
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (event.target === grid && event.animationName === 'directory-results-in') {
            // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
            grid.classList.remove('is-filtering');
        // Menutup blok proses yang dimulai sebelumnya.
        }
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
}

// Menyiapkan observer agar elemen dianimasikan ketika masuk ke area pandang.
// Mendefinisikan fungsi initializeMotionReveals untuk mengelompokkan proses terkait.
function initializeMotionReveals() {
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!('IntersectionObserver' in window)) return;

    // Memperbarui nilai variabel atau properti untuk status terbaru.
    motionRevealObserver = new IntersectionObserver(entries => {
        // Mengulangi proses untuk setiap item dalam kumpulan data.
        entries.forEach(entry => {
            // Memeriksa kondisi sebelum memilih cabang proses.
            if (!entry.isIntersecting) return;

            // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
            entry.target.classList.add('is-revealed');
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            motionRevealObserver.unobserve(entry.target);
        // Menutup blok proses yang dimulai sebelumnya.
        });
    // Menutup blok proses yang dimulai sebelumnya.
    }, {
        // Mengisi properti threshold pada objek atau konfigurasi.
        threshold: 0.12,
        // Mengisi properti rootMargin pada objek atau konfigurasi.
        rootMargin: '0px 0px -24px 0px'
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
}

// Memilih elemen yang perlu dianimasikan berdasarkan tampilan yang sedang aktif.
// Mendefinisikan fungsi animateViewElements untuk mengelompokkan proses terkait.
function animateViewElements(view) {
    // Menyimpan nilai yang diperlukan pada variabel viewMotionSelectors.
    const viewMotionSelectors = {
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'view-home': '.dino-carousel-controls, .hero-content h2, .hero-content p, .hero-content .btn-primary, .stat-item, .section-header, .movie-card',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'view-encyclopedia': '.directory-section-header, .controls-bar, .dino-card',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'view-compare': '.compare-header, .compare-controls, .compare-results, .compare-card',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'view-news': '.news-section-header, .news-card',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'view-detail': '.back-btn, .detail-header, .detail-grid > *, .detail-video-panel, .detail-extra-grid > .detail-panel'
    // Menutup blok proses yang dimulai sebelumnya.
    };
    // Menyimpan nilai yang diperlukan pada variabel selector.
    const selector = view && viewMotionSelectors[view.id];
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!selector) return;

    // Memilih elemen halaman yang akan diproses.
    observeMotionElements(view.querySelectorAll(selector));
// Menutup blok proses yang dimulai sebelumnya.
}

// Menganimasikan bagian header dan footer yang selalu digunakan di setiap tampilan.
// Mendefinisikan fungsi animatePageChrome untuk mengelompokkan proses terkait.
function animatePageChrome() {
    // Memilih elemen halaman yang akan diproses.
    observeMotionElements(document.querySelectorAll('header .logo-group, header .nav-links > li, footer .footer-container'));
// Menutup blok proses yang dimulai sebelumnya.
}

// Mengatur delay dan observer animasi masuk untuk sekumpulan elemen.
// Mendefinisikan fungsi observeMotionElements untuk mengelompokkan proses terkait.
function observeMotionElements(elements) {
    // Mengulangi proses untuk setiap item dalam kumpulan data.
    elements.forEach((element, index) => {
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (motionRevealObserver) {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            motionRevealObserver.unobserve(element);
        // Menutup blok proses yang dimulai sebelumnya.
        }

        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        element.classList.remove('motion-reveal', 'is-revealed');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        element.style.setProperty('--motion-delay', `${(index % 6) * 35}ms`);
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        element.classList.add('motion-reveal');

        // Memeriksa kondisi sebelum memilih cabang proses.
        if (motionRevealObserver) {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            motionRevealObserver.observe(element);
        // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
        } else {
            // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
            element.classList.add('is-revealed');
        // Menutup blok proses yang dimulai sebelumnya.
        }
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
}

// Mengisi jumlah specimen dan media pada ringkasan homepage dari data aktual.
// Mendefinisikan fungsi updateHomepageCounts untuk mengelompokkan proses terkait.
function updateHomepageCounts() {
    // Mengambil elemen halaman dan menyimpannya di countElement.
    const countElement = document.getElementById('catalogedSpecimenCount');
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (countElement) {
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        countElement.textContent = String(dinosaurs.length);
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Mengambil elemen halaman dan menyimpannya di mediaCards.
    const mediaCards = document.querySelectorAll('.movie-card[data-movie]');
    // Mengambil elemen halaman dan menyimpannya di mediaArchiveCount.
    const mediaArchiveCount = document.getElementById('mediaArchiveCount');
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (mediaArchiveCount) {
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        mediaArchiveCount.textContent = String(mediaCards.length);
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    mediaCards.forEach(card => {
        // Menyimpan nilai yang diperlukan pada variabel movieName.
        const movieName = card.dataset.movie;
        // Menyimpan nilai yang diperlukan pada variabel sourceNames.
        const sourceNames = [movieName];
        // Menyimpan hasil penyaringan data di count.
        const count = dinosaurs.filter(dino =>
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            sourceNames.includes(dino.movie) ||
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            (Array.isArray(dino.media) && sourceNames.some(sourceName => dino.media.includes(sourceName)))
        // Mengakhiri pemanggilan fungsi atau callback.
        ).length;
        // Mengambil elemen halaman dan menyimpannya di countElementInCard.
        const countElementInCard = card.querySelector('.movie-specimen-count');
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (countElementInCard) {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            countElementInCard.textContent = `${count} Specimen${count === 1 ? '' : 's'}`;
        // Menutup blok proses yang dimulai sebelumnya.
        }
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
}

// Mengisi pilihan specimen pembanding dan memasang kontrol pembanding acak.
// Mendefinisikan fungsi initializeComparison untuk mengelompokkan proses terkait.
function initializeComparison() {
    // Mengambil elemen halaman dan menyimpannya di specimenA.
    const specimenA = document.getElementById('compareSpecimenA');
    // Mengambil elemen halaman dan menyimpannya di specimenB.
    const specimenB = document.getElementById('compareSpecimenB');
    // Menyimpan nilai yang diperlukan pada variabel sortedDinosaurs.
    const sortedDinosaurs = [...dinosaurs].sort((a, b) => a.name.localeCompare(b.name));

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    sortedDinosaurs.forEach(dino => {
        // Mengulangi proses untuk setiap item dalam kumpulan data.
        [specimenA, specimenB].forEach(select => {
            // Membuat elemen baru dan menyimpannya di option.
            const option = document.createElement('option');
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            option.value = dino.id;
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            option.textContent = dino.name;
            // Menambahkan elemen atau isi ke dalam DOM.
            select.appendChild(option);
        // Menutup blok proses yang dimulai sebelumnya.
        });
    // Menutup blok proses yang dimulai sebelumnya.
    });

    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    specimenA.value = 'tyrannosaurus-rex';
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    specimenB.value = 'spinosaurus';
    // Memasang penangan untuk merespons interaksi atau event.
    specimenA.addEventListener('change', renderComparison);
    // Memasang penangan untuk merespons interaksi atau event.
    specimenB.addEventListener('change', renderComparison);
    // Memasang penangan untuk merespons interaksi atau event.
    document.getElementById('compareRandom').addEventListener('click', () => {
        // Menyimpan nilai yang diperlukan pada variabel firstIndex.
        const firstIndex = Math.floor(Math.random() * dinosaurs.length);
        // Menyimpan nilai yang diperlukan pada variabel secondIndex.
        let secondIndex = Math.floor(Math.random() * (dinosaurs.length - 1));
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (secondIndex >= firstIndex) secondIndex += 1;

        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        specimenA.value = dinosaurs[firstIndex].id;
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        specimenB.value = dinosaurs[secondIndex].id;
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        renderComparison();
    // Menutup blok proses yang dimulai sebelumnya.
    });

    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    renderComparison();
// Menutup blok proses yang dimulai sebelumnya.
}

// Menghubungkan kartu berita dengan dialog dan menangani cara dialog ditutup.
// Mendefinisikan fungsi initializeNewsStories untuk mengelompokkan proses terkait.
function initializeNewsStories() {
    // Mengambil elemen halaman dan menyimpannya di grid.
    const grid = document.getElementById('newsGrid');
    // Mengambil elemen halaman dan menyimpannya di dialog.
    const dialog = document.getElementById('newsStoryDialog');
    // Mengambil elemen halaman dan menyimpannya di dialogContent.
    const dialogContent = document.getElementById('newsStoryDialogContent');
    // Mengambil elemen halaman dan menyimpannya di closeButton.
    const closeButton = dialog && dialog.querySelector('.news-story-close');

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!(grid instanceof HTMLElement) ||
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        !(dialog instanceof HTMLDialogElement) ||
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        !(dialogContent instanceof HTMLElement) ||
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        !(closeButton instanceof HTMLButtonElement)) {
        // Melaporkan kesalahan agar masalah tidak gagal secara diam-diam.
        throw new Error('News story dialog markup is incomplete.');
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Menyimpan nilai yang diperlukan pada variabel openStory.
    const openStory = card => {
        // Menyimpan nilai yang diperlukan pada variabel storyId.
        const storyId = card.dataset.newsStory;
        // Mengambil elemen halaman dan menyimpannya di storyTemplate.
        const storyTemplate = document.getElementById(`news-story-${storyId}`);
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (!(storyTemplate instanceof HTMLTemplateElement)) {
            // Melaporkan kesalahan agar masalah tidak gagal secara diam-diam.
            throw new Error(`Missing news story template for "${storyId}".`);
        // Menutup blok proses yang dimulai sebelumnya.
        }

        // Mengganti isi elemen dengan konten yang baru.
        dialogContent.replaceChildren(storyTemplate.content.cloneNode(true));
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        dialog.showModal();
    // Menutup blok proses yang dimulai sebelumnya.
    };

    // Memasang penangan untuk merespons interaksi atau event.
    grid.addEventListener('click', event => {
        // Menyimpan nilai yang diperlukan pada variabel card.
        const card = event.target instanceof Element
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            ? event.target.closest('.news-card[data-news-story]')
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            : null;
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (card) openStory(card);
    // Menutup blok proses yang dimulai sebelumnya.
    });

    // Memasang penangan untuk merespons interaksi atau event.
    grid.addEventListener('keydown', event => {
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (event.key !== 'Enter' && event.key !== ' ') return;

        // Menyimpan nilai yang diperlukan pada variabel card.
        const card = event.target instanceof Element
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            ? event.target.closest('.news-card[data-news-story]')
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            : null;
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (!card || event.target !== card) return;

        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        event.preventDefault();
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        openStory(card);
    // Menutup blok proses yang dimulai sebelumnya.
    });

    // Memasang penangan untuk merespons interaksi atau event.
    closeButton.addEventListener('click', () => dialog.close());
    // Memasang penangan untuk merespons interaksi atau event.
    dialog.addEventListener('click', event => {
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (event.target === dialog) dialog.close();
    // Menutup blok proses yang dimulai sebelumnya.
    });
    // Mendaftarkan penangan event pada dokumen.
    document.addEventListener('keydown', event => {
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (event.key === 'Escape' && dialog.open) {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            event.preventDefault();
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            dialog.close();
        // Menutup blok proses yang dimulai sebelumnya.
        }
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
}

// Merender dua kartu perbandingan beserta metrik dan tautan ke profilnya.
// Mendefinisikan fungsi renderComparison untuk mengelompokkan proses terkait.
function renderComparison() {
    // Mengambil elemen halaman dan menyimpannya di specimenA.
    const specimenA = dinosaurs.find(dino => dino.id === document.getElementById('compareSpecimenA').value);
    // Mengambil elemen halaman dan menyimpannya di specimenB.
    const specimenB = dinosaurs.find(dino => dino.id === document.getElementById('compareSpecimenB').value);
    // Mengambil elemen halaman dan menyimpannya di results.
    const results = document.getElementById('compareResults');
    // Mengganti isi elemen dengan konten yang baru.
    results.replaceChildren();

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!specimenA || !specimenB) return;
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (specimenA.id === specimenB.id) {
        // Membuat elemen baru dan menyimpannya di message.
        const message = document.createElement('p');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        message.className = 'compare-validation-message';
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        message.textContent = 'Choose two different specimens to compare.';
        // Menambahkan elemen atau isi ke dalam DOM.
        results.appendChild(message);
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return;
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    [specimenA, specimenB].forEach(dino => {
        // Menyimpan nilai yang diperlukan pada variabel knowledge.
        const knowledge = dinosaurKnowledge[dino.id];
        // Membuat elemen baru dan menyimpannya di card.
        const card = document.createElement('article');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        card.className = 'comparison-card';

        // Membuat elemen baru dan menyimpannya di image.
        const image = document.createElement('img');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        image.className = 'comparison-image';
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        image.src = dino.image;
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        image.alt = dino.name;
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        image.loading = 'lazy';
        // Menambahkan elemen atau isi ke dalam DOM.
        card.appendChild(image);

        // Membuat elemen baru dan menyimpannya di heading.
        const heading = document.createElement('h4');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        heading.textContent = dino.name;
        // Menambahkan elemen atau isi ke dalam DOM.
        card.appendChild(heading);

        // Menyimpan nilai yang diperlukan pada variabel rows.
        const rows = [
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            ['Species', dino.species],
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            ['Classification', knowledge.classification],
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            ['Family', knowledge.family],
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            ['Diet', dino.diet],
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            ['Era', knowledge.period],
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            ['Length', dino.length],
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            ['Height', dino.height],
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            ['Weight', dino.weight]
        // Mengakhiri daftar nilai yang sedang disusun.
        ];
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (dino.eggBatchSize) {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            rows.push(['Egg batch size', dino.eggBatchSize]);
        // Menutup blok proses yang dimulai sebelumnya.
        }
        // Membuat elemen baru dan menyimpannya di details.
        const details = document.createElement('dl');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        details.className = 'comparison-data';
        // Mengulangi proses untuk setiap item dalam kumpulan data.
        rows.forEach(([label, value]) => {
            // Membuat elemen baru dan menyimpannya di row.
            const row = document.createElement('div');
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            row.className = 'comparison-data-row';
            // Membuat elemen baru dan menyimpannya di term.
            const term = document.createElement('dt');
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            term.textContent = label;
            // Membuat elemen baru dan menyimpannya di description.
            const description = document.createElement('dd');
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            description.textContent = value;
            // Menambahkan elemen atau isi ke dalam DOM.
            row.append(term, description);
            // Menambahkan elemen atau isi ke dalam DOM.
            details.appendChild(row);
        // Menutup blok proses yang dimulai sebelumnya.
        });
        // Menambahkan elemen atau isi ke dalam DOM.
        card.appendChild(details);

        // Membuat elemen baru dan menyimpannya di history.
        const history = document.createElement('p');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        history.className = 'comparison-history';
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        history.textContent = knowledge.history;
        // Menambahkan elemen atau isi ke dalam DOM.
        card.appendChild(history);

        // Membuat elemen baru dan menyimpannya di profileButton.
        const profileButton = document.createElement('button');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        profileButton.type = 'button';
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        profileButton.className = 'comparison-profile-button';
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        profileButton.textContent = 'Open specimen profile';
        // Memasang penangan untuk merespons interaksi atau event.
        profileButton.addEventListener('click', () => showDetail(dino.id));
        // Menambahkan elemen atau isi ke dalam DOM.
        card.appendChild(profileButton);
        // Menambahkan elemen atau isi ke dalam DOM.
        results.appendChild(card);
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
}

// Memulihkan tema tersimpan dan mengatur perpindahan antara mode terang/gelap.
// Mendefinisikan fungsi initializeThemeToggle untuk mengelompokkan proses terkait.
function initializeThemeToggle() {
    // Mengambil elemen halaman dan menyimpannya di themeToggle.
    const themeToggle = document.getElementById('themeToggle');
    // Menyimpan nilai yang diperlukan pada variabel root.
    const root = document.documentElement;
    // Menyimpan nilai yang diperlukan pada variabel applyTheme.
    const applyTheme = theme => {
        // Menyimpan nilai yang diperlukan pada variabel isLight.
        const isLight = theme === 'light';
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        root.dataset.theme = isLight ? 'light' : 'dark';
        // Memperbarui atribut elemen untuk status atau aksesibilitas.
        themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
        // Memperbarui atribut elemen untuk status atau aksesibilitas.
        themeToggle.setAttribute('aria-pressed', String(isLight));
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        themeToggle.title = isLight ? 'Switch to dark mode' : 'Switch to light mode';
    // Menutup blok proses yang dimulai sebelumnya.
    };

    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
    // Memasang penangan untuk merespons interaksi atau event.
    themeToggle.addEventListener('click', () => {
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (themeToggle.classList.contains('theme-transitioning')) return;

        // Menyimpan nilai yang diperlukan pada variabel nextTheme.
        const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
        // Membaca atau menyimpan preferensi dan status sesi.
        localStorage.setItem(themeStorageKey, nextTheme);

        // Menyimpan nilai yang diperlukan pada variabel prefersReducedMotion.
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // Menyimpan nilai yang diperlukan pada variabel backgroundDuration.
        const backgroundDuration = prefersReducedMotion ? 360 : 550;
        // Menyimpan nilai yang diperlukan pada variabel iconDuration.
        const iconDuration = prefersReducedMotion ? 360 : 750;
        // Menyimpan nilai yang diperlukan pada variabel buttonAnimationClass.
        const buttonAnimationClass = `theme-switching-to-${nextTheme}`;
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        root.classList.add('theme-background-transitioning');
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        themeToggle.classList.add('theme-transitioning', buttonAnimationClass);
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        applyTheme(nextTheme);
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        window.setTimeout(() => root.classList.remove('theme-background-transitioning'), backgroundDuration);
        // Menjadwalkan proses agar dijalankan setelah jeda atau berulang.
        window.setTimeout(() => {
            // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
            themeToggle.classList.remove(buttonAnimationClass, 'theme-transitioning');
        // Menutup blok proses yang dimulai sebelumnya.
        }, iconDuration);
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
}

// Menyimpan homepage sebagai tampilan terakhir sebelum memuat ulang halaman.
// Mendefinisikan fungsi reloadHome untuk mengelompokkan proses terkait.
function reloadHome() {
    // Membaca atau menyimpan preferensi dan status sesi.
    sessionStorage.setItem(savedViewKey, 'home');
    // Membaca atau menyimpan preferensi dan status sesi.
    sessionStorage.removeItem(savedDetailKey);
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    window.location.reload();
// Menutup blok proses yang dimulai sebelumnya.
}

// Memulihkan tampilan dan specimen terakhir jika halaman dimuat ulang.
// Mendefinisikan fungsi restoreViewAfterReload untuk mengelompokkan proses terkait.
function restoreViewAfterReload() {
    // Menyimpan nilai yang diperlukan pada variabel navigationEntry.
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!navigationEntry || navigationEntry.type !== 'reload') return;

    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    history.scrollRestoration = 'manual';
    // Menyimpan nilai yang diperlukan pada variabel savedView.
    const savedView = sessionStorage.getItem(savedViewKey);
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!['home', 'encyclopedia', 'compare', 'news', 'detail'].includes(savedView)) return;

    // Menyimpan nilai yang diperlukan pada variabel detailId.
    const detailId = sessionStorage.getItem(savedDetailKey);
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (savedView === 'detail' && detailId && dinosaurs.some(dino => dino.id === detailId)) {
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        showDetail(detailId, false);
    // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
    } else {
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        switchView(savedView, { scrollToTop: false });
    // Menutup blok proses yang dimulai sebelumnya.
    }
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    window.scrollTo(0, 0);
// Menutup blok proses yang dimulai sebelumnya.
}

// Membuat slide homepage dan titik navigasinya dari data gambar slideshow.
// Mendefinisikan fungsi initializeDinoCarousel untuk mengelompokkan proses terkait.
function initializeDinoCarousel() {
    // Mengambil elemen halaman dan menyimpannya di slidesContainer.
    const slidesContainer = document.getElementById('dinoCarouselSlides');
    // Mengambil elemen halaman dan menyimpannya di dotsContainer.
    const dotsContainer = document.getElementById('dinoCarouselDots');
    // Mengulangi proses untuk setiap item dalam kumpulan data.
    homeSlideImages.forEach((slideData, index) => {
        // Membuat elemen baru dan menyimpannya di slide.
        const slide = document.createElement('article');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        slide.className = `dino-carousel-slide${index === 0 ? ' active' : ''}`;
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        slide.dataset.dinoId = slideData.dinoId;
        // Memperbarui atribut elemen untuk status atau aksesibilitas.
        slide.setAttribute('aria-hidden', String(index !== 0));
        // Memperbarui atribut elemen untuk status atau aksesibilitas.
        slide.setAttribute('role', 'button');
        // Memperbarui atribut elemen untuk status atau aksesibilitas.
        slide.setAttribute('aria-label', `Open ${slideData.name} in the Encyclopedia`);
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        slide.tabIndex = index === 0 ? 0 : -1;
        // Memasang penangan untuk merespons interaksi atau event.
        slide.addEventListener('click', () => showDetail(slideData.dinoId));
        // Memasang penangan untuk merespons interaksi atau event.
        slide.addEventListener('keydown', event => {
            // Memeriksa kondisi sebelum memilih cabang proses.
            if (event.key === 'Enter' || event.key === ' ') {
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                event.preventDefault();
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                showDetail(slideData.dinoId);
            // Menutup blok proses yang dimulai sebelumnya.
            }
        // Menutup blok proses yang dimulai sebelumnya.
        });

        // Membuat elemen baru dan menyimpannya di image.
        const image = document.createElement('img');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        image.src = slideData.src;
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        image.alt = slideData.name;
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        image.loading = 'eager';
        // Memasang penangan untuk merespons interaksi atau event.
        image.addEventListener('animationend', event => {
            // Memeriksa kondisi sebelum memilih cabang proses.
            if (event.animationName === 'hero-specimen-in') {
                // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
                image.classList.remove('is-intro-animating');
            // Menutup blok proses yang dimulai sebelumnya.
            }
        // Menutup blok proses yang dimulai sebelumnya.
        });

        // Membuat elemen baru dan menyimpannya di dot.
        const dot = document.createElement('button');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        dot.type = 'button';
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        dot.className = `dino-carousel-dot${index === 0 ? ' active' : ''}`;
        // Memperbarui atribut elemen untuk status atau aksesibilitas.
        dot.setAttribute('aria-label', `Show ${slideData.name}`);
        // Memperbarui atribut elemen untuk status atau aksesibilitas.
        dot.setAttribute('aria-current', String(index === 0));
        // Memasang penangan untuk merespons interaksi atau event.
        dot.addEventListener('click', () => {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            setDinoSlide(Array.from(dotsContainer.children).indexOf(dot));
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            restartDinoCarousel();
        // Menutup blok proses yang dimulai sebelumnya.
        });

        // Memasang penangan untuk merespons interaksi atau event.
        image.addEventListener('load', () => {
            // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
            image.classList.add('is-ready');
            // Memeriksa kondisi sebelum memilih cabang proses.
            if (slide.classList.contains('active')) {
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                startHeroVisualAnimations();
            // Menutup blok proses yang dimulai sebelumnya.
            }
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            startDinoCarousel();
        // Menutup blok proses yang dimulai sebelumnya.
        });
        // Memasang penangan untuk merespons interaksi atau event.
        image.addEventListener('error', () => {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            console.warn(`Homepage slideshow image could not be loaded: ${slideData.src}`);

            // Menghentikan timer agar proses tertunda tidak berjalan.
            window.clearTimeout(dinoSlideTransitionTimer);
            // Memperbarui nilai variabel atau properti untuk status terbaru.
            dinoSlideTransitionTimer = null;

            // Menyimpan nilai yang diperlukan pada variabel slides.
            const slides = Array.from(slidesContainer.children);
            // Menyimpan nilai yang diperlukan pada variabel removedIndex.
            const removedIndex = slides.indexOf(slide);
            // Menyimpan nilai yang diperlukan pada variabel activeIndex.
            const activeIndex = slides.findIndex(item => item.classList.contains('active'));

            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            slide.remove();
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            dot.remove();

            // Menyimpan nilai yang diperlukan pada variabel remainingSlides.
            const remainingSlides = slidesContainer.children.length;
            // Mengulangi proses untuk setiap item dalam kumpulan data.
            Array.from(dotsContainer.children).forEach((item, dotIndex) => {
                // Memperbarui atribut elemen untuk status atau aksesibilitas.
                item.setAttribute('aria-label', `Show photo ${dotIndex + 1}`);
            // Menutup blok proses yang dimulai sebelumnya.
            });

            // Memeriksa kondisi sebelum memilih cabang proses.
            if (remainingSlides === 0) {
                // Memperbarui nilai variabel atau properti untuk status terbaru.
                activeDinoSlide = 0;
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                pauseDinoCarousel();
                // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
                return;
            // Menutup blok proses yang dimulai sebelumnya.
            }

            // Menyimpan nilai yang diperlukan pada variabel nextActiveIndex.
            const nextActiveIndex = activeIndex > removedIndex
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                ? activeIndex - 1
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                : Math.max(0, Math.min(activeIndex, remainingSlides - 1));
            // Memperbarui nilai variabel atau properti untuk status terbaru.
            activeDinoSlide = nextActiveIndex;

            // Mengulangi proses untuk setiap item dalam kumpulan data.
            Array.from(slidesContainer.children).forEach((item, slideIndex) => {
                // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
                item.classList.remove('exit-left', 'exit-right', 'enter-from-left', 'enter-from-right');
                // Menyimpan nilai yang diperlukan pada variabel isActive.
                const isActive = slideIndex === activeDinoSlide;
                // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
                item.classList.toggle('active', isActive);
                // Memperbarui atribut elemen untuk status atau aksesibilitas.
                item.setAttribute('aria-hidden', String(!isActive));
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                item.tabIndex = isActive ? 0 : -1;
            // Menutup blok proses yang dimulai sebelumnya.
            });
            // Mengulangi proses untuk setiap item dalam kumpulan data.
            Array.from(dotsContainer.children).forEach((item, dotIndex) => {
                // Menyimpan nilai yang diperlukan pada variabel isActive.
                const isActive = dotIndex === activeDinoSlide;
                // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
                item.classList.toggle('active', isActive);
                // Memperbarui atribut elemen untuk status atau aksesibilitas.
                item.setAttribute('aria-current', String(isActive));
            // Menutup blok proses yang dimulai sebelumnya.
            });
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            startHeroVisualAnimations();

            // Memeriksa kondisi sebelum memilih cabang proses.
            if (remainingSlides < 2) {
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                pauseDinoCarousel();
            // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
            } else {
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                startDinoCarousel();
            // Menutup blok proses yang dimulai sebelumnya.
            }
        // Menutup blok proses yang dimulai sebelumnya.
        });

        // Menambahkan elemen atau isi ke dalam DOM.
        slide.appendChild(image);
        // Menambahkan elemen atau isi ke dalam DOM.
        slidesContainer.appendChild(slide);
        // Menambahkan elemen atau isi ke dalam DOM.
        dotsContainer.appendChild(dot);
    // Menutup blok proses yang dimulai sebelumnya.
    });

    // Menyimpan nilai yang diperlukan pada variabel resumeCarousel.
    const resumeCarousel = () => {
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (document.getElementById('view-home').classList.contains('active')) {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            startDinoCarousel();
        // Menutup blok proses yang dimulai sebelumnya.
        }
    // Menutup blok proses yang dimulai sebelumnya.
    };

    // Mendaftarkan penangan event pada dokumen.
    document.addEventListener('visibilitychange', () => {
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (document.hidden) {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            pauseDinoCarousel();
        // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
        } else {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            resumeCarousel();
        // Menutup blok proses yang dimulai sebelumnya.
        }
    // Menutup blok proses yang dimulai sebelumnya.
    });

    // Menjadwalkan proses agar dijalankan setelah jeda atau berulang.
    window.setTimeout(startDinoCarousel, 300);
// Menutup blok proses yang dimulai sebelumnya.
}

// Mengganti slide aktif, memperbarui aksesibilitas, dan menjalankan transisi.
// Mendefinisikan fungsi setDinoSlide untuk mengelompokkan proses terkait.
function setDinoSlide(index, direction) {
    // Mengambil elemen halaman dan menyimpannya di slides.
    const slides = document.querySelectorAll('.dino-carousel-slide');
    // Mengambil elemen halaman dan menyimpannya di dots.
    const dots = document.querySelectorAll('.dino-carousel-dot');
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (slides.length === 0) {
        // Memperbarui nilai variabel atau properti untuk status terbaru.
        activeDinoSlide = 0;
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return;
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Menyimpan nilai yang diperlukan pada variabel previousIndex.
    const previousIndex = activeDinoSlide;
    // Menyimpan nilai yang diperlukan pada variabel nextIndex.
    const nextIndex = (index + slides.length) % slides.length;
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (nextIndex === previousIndex || dinoSlideTransitionTimer) {
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return;
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (direction !== 1 && direction !== -1) {
        // Menyimpan nilai yang diperlukan pada variabel forwardDistance.
        const forwardDistance = (nextIndex - previousIndex + slides.length) % slides.length;
        // Menyimpan nilai yang diperlukan pada variabel backwardDistance.
        const backwardDistance = (previousIndex - nextIndex + slides.length) % slides.length;
        // Memperbarui nilai variabel atau properti untuk status terbaru.
        direction = forwardDistance <= backwardDistance ? 1 : -1;
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    slides.forEach(slide => {
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        slide.classList.remove('exit-left', 'exit-right', 'enter-from-left', 'enter-from-right');
        // Mengambil elemen halaman dan menyimpannya di image.
        const image = slide.querySelector('img');
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (image) {
            // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
            image.classList.remove('is-intro-animating');
        // Menutup blok proses yang dimulai sebelumnya.
        }
    // Menutup blok proses yang dimulai sebelumnya.
    });

    // Menyimpan nilai yang diperlukan pada variabel previousSlide.
    const previousSlide = slides[previousIndex];
    // Menyimpan nilai yang diperlukan pada variabel nextSlide.
    const nextSlide = slides[nextIndex];
    // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
    previousSlide.classList.remove('active');
    // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
    previousSlide.classList.add(direction > 0 ? 'exit-left' : 'exit-right');
    // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
    nextSlide.classList.add(direction > 0 ? 'enter-from-right' : 'enter-from-left');
    // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
    nextSlide.classList.add('active');

    // Memperbarui nilai variabel atau properti untuk status terbaru.
    activeDinoSlide = nextIndex;

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    slides.forEach((slide, slideIndex) => {
        // Menyimpan nilai yang diperlukan pada variabel isActive.
        const isActive = slideIndex === activeDinoSlide;
        // Memperbarui atribut elemen untuk status atau aksesibilitas.
        slide.setAttribute('aria-hidden', String(!isActive));
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        slide.tabIndex = isActive ? 0 : -1;
    // Menutup blok proses yang dimulai sebelumnya.
    });

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    dots.forEach((dot, dotIndex) => {
        // Menyimpan nilai yang diperlukan pada variabel isActive.
        const isActive = dotIndex === activeDinoSlide;
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        dot.classList.toggle('active', isActive);
        // Memperbarui atribut elemen untuk status atau aksesibilitas.
        dot.setAttribute('aria-current', String(isActive));
    // Menutup blok proses yang dimulai sebelumnya.
    });

    // Menyimpan nilai yang diperlukan pada variabel transitionDuration.
    const transitionDuration = parseFloat(window.getComputedStyle(nextSlide).animationDuration) * 1000;
    // Menjadwalkan proses agar dijalankan setelah jeda atau berulang.
    dinoSlideTransitionTimer = window.setTimeout(() => {
        // Mengulangi proses untuk setiap item dalam kumpulan data.
        slides.forEach(slide => {
            // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
            slide.classList.remove('exit-left', 'exit-right', 'enter-from-left', 'enter-from-right');
        // Menutup blok proses yang dimulai sebelumnya.
        });
        // Memperbarui nilai variabel atau properti untuk status terbaru.
        dinoSlideTransitionTimer = null;
    // Menutup blok proses yang dimulai sebelumnya.
    }, transitionDuration + 50);
// Menutup blok proses yang dimulai sebelumnya.
}

// Memajukan atau memundurkan slideshow lalu mengulang timer otomatisnya.
// Mendefinisikan fungsi changeDinoSlide untuk mengelompokkan proses terkait.
function changeDinoSlide(direction) {
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    setDinoSlide(activeDinoSlide + direction, direction > 0 ? 1 : -1);
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    restartDinoCarousel();
// Menutup blok proses yang dimulai sebelumnya.
}

// Mereset timer agar jeda otomatis dimulai lagi setelah interaksi pengguna.
// Mendefinisikan fungsi restartDinoCarousel untuk mengelompokkan proses terkait.
function restartDinoCarousel() {
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    pauseDinoCarousel();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    startDinoCarousel();
// Menutup blok proses yang dimulai sebelumnya.
}

// Menjalankan slideshow otomatis hanya saat homepage terlihat dan punya beberapa slide.
// Mendefinisikan fungsi startDinoCarousel untuk mengelompokkan proses terkait.
function startDinoCarousel() {
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        dinoCarouselTimer ||
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        document.hidden ||
        // Memilih elemen halaman yang akan diproses.
        !document.getElementById('view-home').classList.contains('active') ||
        // Memilih elemen halaman yang akan diproses.
        document.querySelectorAll('.dino-carousel-slide').length < 2
    // Mengakhiri pemanggilan fungsi atau callback.
    ) {
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return;
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Menjadwalkan proses agar dijalankan setelah jeda atau berulang.
    dinoCarouselTimer = window.setInterval(() => changeDinoSlide(1), 6000);
// Menutup blok proses yang dimulai sebelumnya.
}

// Menghentikan timer perpindahan slide otomatis.
// Mendefinisikan fungsi pauseDinoCarousel untuk mengelompokkan proses terkait.
function pauseDinoCarousel() {
    // Menghentikan timer agar proses tertunda tidak berjalan.
    window.clearInterval(dinoCarouselTimer);
    // Memperbarui nilai variabel atau properti untuk status terbaru.
    dinoCarouselTimer = null;
// Menutup blok proses yang dimulai sebelumnya.
}

// Mengembalikan slideshow dan titik navigasi ke slide pertama.
// Mendefinisikan fungsi resetDinoCarousel untuk mengelompokkan proses terkait.
function resetDinoCarousel() {
    // Menghentikan timer agar proses tertunda tidak berjalan.
    window.clearTimeout(dinoSlideTransitionTimer);
    // Memperbarui nilai variabel atau properti untuk status terbaru.
    dinoSlideTransitionTimer = null;
    // Memperbarui nilai variabel atau properti untuk status terbaru.
    activeDinoSlide = 0;

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    document.querySelectorAll('.dino-carousel-slide').forEach((slide, index) => {
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        slide.classList.remove('exit-left', 'exit-right', 'enter-from-left', 'enter-from-right');
        // Menyimpan nilai yang diperlukan pada variabel isActive.
        const isActive = index === 0;
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        slide.classList.toggle('active', isActive);
        // Memperbarui atribut elemen untuk status atau aksesibilitas.
        slide.setAttribute('aria-hidden', String(!isActive));
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        slide.tabIndex = isActive ? 0 : -1;
    // Menutup blok proses yang dimulai sebelumnya.
    });

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    document.querySelectorAll('.dino-carousel-dot').forEach((dot, index) => {
        // Menyimpan nilai yang diperlukan pada variabel isActive.
        const isActive = index === 0;
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        dot.classList.toggle('active', isActive);
        // Memperbarui atribut elemen untuk status atau aksesibilitas.
        dot.setAttribute('aria-current', String(isActive));
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
}

// Menampilkan bagian aplikasi yang dipilih, menyelaraskan navigasi, dan menyimpan status.
// Mendefinisikan fungsi switchView untuk mengelompokkan proses terkait.
function switchView(viewName, { scrollToTop = true, detailId = null } = {}) {
    // Mengambil elemen halaman dan menyimpannya di targetView.
    const targetView = document.getElementById(`view-${viewName}`);
    // Menyimpan nilai yang diperlukan pada variabel isViewChange.
    const isViewChange = targetView && !targetView.classList.contains('active');
    // Mengambil elemen halaman dan menyimpannya di currentView.
    const currentView = document.querySelector('.view-section.active, .detail-view.active');
    // Menyimpan nilai yang diperlukan pada variabel switchGeneration.
    const switchGeneration = ++viewSwitchGeneration;
    // Menyimpan nilai yang diperlukan pada variabel prefersReducedMotion.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (viewSwitchTimer) {
        // Menghentikan timer agar proses tertunda tidak berjalan.
        window.clearTimeout(viewSwitchTimer);
        // Memperbarui nilai variabel atau properti untuk status terbaru.
        viewSwitchTimer = null;
    // Menutup blok proses yang dimulai sebelumnya.
    }
    // Mengulangi proses untuk setiap item dalam kumpulan data.
    document.querySelectorAll('.is-view-leaving').forEach(view => {
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        view.classList.remove('is-view-leaving');
    // Menutup blok proses yang dimulai sebelumnya.
    });

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (viewName !== 'detail') {
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        stopSpecimenVideo();
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Membaca atau menyimpan preferensi dan status sesi.
    sessionStorage.setItem(savedViewKey, viewName);
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (detailId) {
        // Membaca atau menyimpan preferensi dan status sesi.
        sessionStorage.setItem(savedDetailKey, detailId);
    // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
    } else {
        // Membaca atau menyimpan preferensi dan status sesi.
        sessionStorage.removeItem(savedDetailKey);
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Menyimpan nilai yang diperlukan pada variabel updateView.
    const updateView = () => {
        // Menyimpan nilai yang diperlukan pada variabel scrollViewToTop.
        const scrollViewToTop = () => {
            // Memeriksa kondisi sebelum memilih cabang proses.
            if (!scrollToTop) return;
            // Memeriksa kondisi sebelum memilih cabang proses.
            if (prefersReducedMotion) {
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                window.scrollTo(0, 0);
            // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
            } else {
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                window.scrollTo({ top: 0, behavior: 'smooth' });
            // Menutup blok proses yang dimulai sebelumnya.
            }
        // Menutup blok proses yang dimulai sebelumnya.
        };

        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        document.body.classList.toggle('home-mode', viewName === 'home');
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        document.body.classList.toggle('encyclopedia-mode', viewName === 'encyclopedia');
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        document.body.classList.toggle('compare-mode', viewName === 'compare');
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        document.body.classList.toggle('news-mode', viewName === 'news');
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        document.body.classList.toggle('detail-mode', viewName === 'detail');

        // Mengulangi proses untuk setiap item dalam kumpulan data.
        document.querySelectorAll('.view-section, .detail-view').forEach(el => {
            // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
            el.classList.remove('active', 'is-view-leaving');
        // Menutup blok proses yang dimulai sebelumnya.
        });

        // Mengulangi proses untuk setiap item dalam kumpulan data.
        document.querySelectorAll('.nav-links button').forEach(btn => {
            // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
            btn.classList.remove('active');
        // Menutup blok proses yang dimulai sebelumnya.
        });

        // Memeriksa kondisi sebelum memilih cabang proses.
        if (viewName === 'home') {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            resetDinoCarousel();
            // Memilih elemen halaman yang akan diproses.
            document.getElementById('view-home').classList.add('active');
            // Memilih elemen halaman yang akan diproses.
            document.getElementById('nav-home').classList.add('active');
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            startHeroVisualAnimations(true);
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            scrollViewToTop();
        // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
        } else if (viewName === 'encyclopedia') {
            // Memilih elemen halaman yang akan diproses.
            document.getElementById('view-encyclopedia').classList.add('active');
            // Memilih elemen halaman yang akan diproses.
            document.getElementById('nav-encyclopedia').classList.add('active');
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            scrollViewToTop();
        // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
        } else if (viewName === 'compare') {
            // Memilih elemen halaman yang akan diproses.
            document.getElementById('view-compare').classList.add('active');
            // Memilih elemen halaman yang akan diproses.
            document.getElementById('nav-compare').classList.add('active');
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            scrollViewToTop();
        // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
        } else if (viewName === 'news') {
            // Memilih elemen halaman yang akan diproses.
            document.getElementById('view-news').classList.add('active');
            // Memilih elemen halaman yang akan diproses.
            document.getElementById('nav-news').classList.add('active');
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            scrollViewToTop();
        // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
        } else if (viewName === 'detail') {
            // Memilih elemen halaman yang akan diproses.
            document.getElementById('view-detail').classList.add('active');
            // Memeriksa kondisi sebelum memilih cabang proses.
            if (scrollToTop) window.scrollTo(0, 0);
        // Menutup blok proses yang dimulai sebelumnya.
        }

        // Memeriksa kondisi sebelum memilih cabang proses.
        if (viewName === 'home') {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            startDinoCarousel();
        // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
        } else {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            pauseDinoCarousel();
        // Menutup blok proses yang dimulai sebelumnya.
        }

        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        animateViewElements(targetView);
    // Menutup blok proses yang dimulai sebelumnya.
    };

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (isViewChange && currentView) {
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        currentView.classList.add('is-view-leaving');
        // Menjadwalkan proses agar dijalankan setelah jeda atau berulang.
        viewSwitchTimer = window.setTimeout(() => {
            // Memperbarui nilai variabel atau properti untuk status terbaru.
            viewSwitchTimer = null;
            // Memeriksa kondisi sebelum memilih cabang proses.
            if (switchGeneration === viewSwitchGeneration) {
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                updateView();
            // Menutup blok proses yang dimulai sebelumnya.
            }
        // Menutup blok proses yang dimulai sebelumnya.
        }, 160);
    // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
    } else {
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        updateView();
    // Menutup blok proses yang dimulai sebelumnya.
    }
// Menutup blok proses yang dimulai sebelumnya.
}

// Membuka direktori dengan filter film yang dipilih dari kartu homepage.
// Mendefinisikan fungsi filterByMovie untuk mengelompokkan proses terkait.
function filterByMovie(movieName) {
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    switchView('encyclopedia');
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('movieFilter').value = movieName;
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    filterDinosaurs();
// Menutup blok proses yang dimulai sebelumnya.
}

// Menentukan kategori, label aksesibilitas, dan ikon sesuai jenis/diet specimen.
// Mendefinisikan fungsi getDietIcon untuk mengelompokkan proses terkait.
function getDietIcon(dino) {
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (dino.type === 'Hybrid') {
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return {
            // Mengisi properti category pada objek atau konfigurasi.
            category: 'hybrid',
            // Mengisi properti label pada objek atau konfigurasi.
            label: 'Hybrid',
            // Mengisi properti emoji pada objek atau konfigurasi.
            emoji: '🧬'
        // Menutup blok proses yang dimulai sebelumnya.
        };
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Menyimpan nilai yang diperlukan pada variabel diet.
    const diet = dino.diet.toLowerCase();

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (diet.includes('omnivore')) {
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return {
            // Mengisi properti category pada objek atau konfigurasi.
            category: 'omnivore',
            // Mengisi properti label pada objek atau konfigurasi.
            label: 'Omnivore',
            // Mengisi properti emoji pada objek atau konfigurasi.
            emoji: '🍽️'
        // Menutup blok proses yang dimulai sebelumnya.
        };
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (diet.includes('herbivore')) {
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return {
            // Mengisi properti category pada objek atau konfigurasi.
            category: 'herbivore',
            // Mengisi properti label pada objek atau konfigurasi.
            label: 'Herbivore',
            // Mengisi properti svg pada objek atau konfigurasi.
            svg: '<path d="M20 4C12 4 6 7 6 13a5 5 0 0 0 5 5c6 0 9-6 9-14Z"/><path d="M4 20c4-5 8-8 13-11"/>'
        // Menutup blok proses yang dimulai sebelumnya.
        };
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (dino.type === 'Amphibian' || diet.includes('piscivore') || diet.includes('amphibian')) {
        // Menyimpan nilai yang diperlukan pada variabel isAmphibian.
        const isAmphibian = dino.type === 'Amphibian' || diet.includes('amphibian');
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return {
            // Mengisi properti category pada objek atau konfigurasi.
            category: isAmphibian ? 'aquatic' : 'piscivore',
            // Mengisi properti label pada objek atau konfigurasi.
            label: isAmphibian ? 'Amphibian' : 'Piscivore',
            // Mengisi properti svg pada objek atau konfigurasi.
            svg: '<path d="M12 3s6.5 7.1 6.5 11.5a6.5 6.5 0 1 1-13 0C5.5 10.1 12 3 12 3Z"/>'
        // Menutup blok proses yang dimulai sebelumnya.
        };
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
    return {
        // Mengisi properti category pada objek atau konfigurasi.
        category: 'carnivore',
        // Mengisi properti label pada objek atau konfigurasi.
        label: 'Carnivore',
        // Mengisi properti emoji pada objek atau konfigurasi.
        emoji: '🥩'
    // Menutup blok proses yang dimulai sebelumnya.
    };
// Menutup blok proses yang dimulai sebelumnya.
}

// Menampilkan gambar pengganti jika gambar specimen gagal dimuat.
// Mendefinisikan fungsi setSpecimenImageFallback untuk mengelompokkan proses terkait.
function setSpecimenImageFallback(image) {
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    image.onerror = () => {
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        image.onerror = null;
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        image.src = 'specimen-image-placeholder.svg';
    // Menutup blok proses yang dimulai sebelumnya.
    };
// Menutup blok proses yang dimulai sebelumnya.
}

// Menghentikan dan mengosongkan pemutar video lokal maupun embed YouTube.
// Mendefinisikan fungsi stopSpecimenVideo untuk mengelompokkan proses terkait.
function stopSpecimenVideo() {
    // Mengambil elemen halaman dan menyimpannya di detailVideo.
    const detailVideo = document.getElementById('detailVideo');
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    detailVideo.pause();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    detailVideo.removeAttribute('src');
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    detailVideo.load();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    detailVideo.hidden = true;

    // Mengambil elemen halaman dan menyimpannya di detailVideoEmbed.
    const detailVideoEmbed = document.getElementById('detailVideoEmbed');
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    detailVideoEmbed.src = 'about:blank';
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    detailVideoEmbed.hidden = true;
// Menutup blok proses yang dimulai sebelumnya.
}

// Mengurutkan data lalu membangun kartu-kartu specimen pada direktori.
// Mendefinisikan fungsi renderDirectory untuk mengelompokkan proses terkait.
function renderDirectory(data, { animate = false } = {}) {
    // Mengambil elemen halaman dan menyimpannya di grid.
    const grid = document.getElementById('dinoGrid');
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (animate) {
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        grid.classList.remove('is-filtering');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        void grid.offsetWidth;
        // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
        grid.classList.add('is-filtering');
    // Menutup blok proses yang dimulai sebelumnya.
    }
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    grid.innerHTML = '';

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (data.length === 0) {
        // Memperbarui nilai variabel atau properti untuk status terbaru.
        directoryDinoIds = [];
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No specimens match your search criteria.</p>`;
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return;
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Mengambil elemen halaman dan menyimpannya di sortOrder.
    const sortOrder = document.getElementById('sortOrder').value;
    // Menyimpan nilai yang diperlukan pada variabel orderedData.
    const orderedData = [...data].sort((a, b) => {
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (sortOrder === 'asc') {
            // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
            return a.name.localeCompare(b.name);
        // Menutup blok proses yang dimulai sebelumnya.
        }
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (sortOrder === 'desc') {
            // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
            return b.name.localeCompare(a.name);
        // Menutup blok proses yang dimulai sebelumnya.
        }

        // Menyimpan nilai yang diperlukan pada variabel aRank.
        const aRank = featuredDinoIds.indexOf(a.id);
        // Menyimpan nilai yang diperlukan pada variabel bRank.
        const bRank = featuredDinoIds.indexOf(b.id);
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return (aRank === -1 ? featuredDinoIds.length : aRank)
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            - (bRank === -1 ? featuredDinoIds.length : bRank);
    // Menutup blok proses yang dimulai sebelumnya.
    });
    // Memperbarui nilai variabel atau properti untuk status terbaru.
    directoryDinoIds = orderedData.map(dino => dino.id);
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (data.length === dinosaurs.length) {
        // Memperbarui nilai variabel atau properti untuk status terbaru.
        allDinoNavigationIds = [...directoryDinoIds];
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    orderedData.forEach(dino => {
        // Menyimpan nilai yang diperlukan pada variabel dietIcon.
        const dietIcon = getDietIcon(dino);
        // Membuat elemen baru dan menyimpannya di card.
        const card = document.createElement('div');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        card.className = 'dino-card';
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        card.onclick = () => showDetail(dino.id);
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        card.innerHTML = `
            <div class="dino-image-container">
                <h4 class="dino-card-name">${dino.name}</h4>
                <span class="dino-diet-icon dino-diet-icon-${dietIcon.category}" role="img" aria-label="${dietIcon.label}" title="${dietIcon.label}">
                    ${dietIcon.emoji
                        ? `<span class="dino-diet-emoji" aria-hidden="true">${dietIcon.emoji}</span>`
                        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${dietIcon.svg}</svg>`}
                </span>
                <img src="${dino.image}" alt="${dino.name}" data-specimen-id="${dino.id}" loading="lazy">
            </div>
        `;
        // Memilih elemen halaman yang akan diproses.
        setSpecimenImageFallback(card.querySelector('img'));
        // Menambahkan elemen atau isi ke dalam DOM.
        grid.appendChild(card);
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
}

// Mengosongkan seluruh filter dan mengembalikan urutan direktori ke awal.
// Mendefinisikan fungsi resetDinosaursFilter untuk mengelompokkan proses terkait.
function resetDinosaursFilter() {
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('searchInput').value = '';
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('movieFilter').value = '';
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('dietFilter').value = '';
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('sortOrder').value = '';
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    filterDinosaurs();

    // Mengambil elemen halaman dan menyimpannya di resetButton.
    const resetButton = document.getElementById('resetFilters');
    // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
    resetButton.classList.remove('is-spinning');
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    void resetButton.offsetWidth;
    // Memperbarui kelas elemen untuk menyelaraskan status tampilannya.
    resetButton.classList.add('is-spinning');
// Menutup blok proses yang dimulai sebelumnya.
}

// Menyaring katalog berdasarkan teks pencarian, film, dan jenis diet.
// Mendefinisikan fungsi filterDinosaurs untuk mengelompokkan proses terkait.
function filterDinosaurs() {
    // Mengambil elemen halaman dan menyimpannya di query.
    const query = document.getElementById('searchInput').value.toLowerCase();
    // Mengambil elemen halaman dan menyimpannya di selectedMovie.
    const selectedMovie = document.getElementById('movieFilter').value;
    // Mengambil elemen halaman dan menyimpannya di selectedDiet.
    const selectedDiet = document.getElementById('dietFilter').value;

    // Menyimpan hasil penyaringan data di filtered.
    const filtered = dinosaurs.filter(dino => {
        // Menyimpan nilai yang diperlukan pada variabel matchesQuery.
        const matchesQuery = dino.name.toLowerCase().includes(query) || dino.species.toLowerCase().includes(query);
        // Menyimpan nilai yang diperlukan pada variabel selectedMovieSources.
        const selectedMovieSources = [selectedMovie];
        // Menyimpan nilai yang diperlukan pada variabel matchesMovie.
        const matchesMovie = selectedMovie === "" || selectedMovieSources.includes(dino.movie) ||
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            (Array.isArray(dino.media) && selectedMovieSources.some(sourceName => dino.media.includes(sourceName)));
        // Menyimpan nilai yang diperlukan pada variabel matchesDiet.
        const matchesDiet = selectedDiet === "" ||
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            (selectedDiet === "Hybrid" ? dino.type === selectedDiet : dino.diet === selectedDiet);
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return matchesQuery && matchesMovie && matchesDiet;
    // Menutup blok proses yang dimulai sebelumnya.
    });

    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    renderDirectory(filtered, { animate: true });
// Menutup blok proses yang dimulai sebelumnya.
}

// Menyusun pertanyaan umum specimen dan menampilkannya pada panel detail.
// Mendefinisikan fungsi renderDinosaurFaq untuk mengelompokkan proses terkait.
function renderDinosaurFaq(dino, knowledge) {
    // Menyimpan nilai yang diperlukan pada variabel appearances.
    const appearances = [...new Set([dino.movie, ...(Array.isArray(dino.media) ? dino.media : [])])];
    // Menyimpan nilai yang diperlukan pada variabel faqItems.
    const faqItems = [
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        {
            // Mengisi properti question pada objek atau konfigurasi.
            question: `What is ${dino.name}'s scientific classification?`,
            // Mengisi properti answer pada objek atau konfigurasi.
            answer: `${knowledge.classification} Family: ${knowledge.family}. Genus: ${knowledge.genus}. Recorded species: ${dino.species}.`
        // Menutup blok proses yang dimulai sebelumnya.
        },
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        {
            // Mengisi properti question pada objek atau konfigurasi.
            question: `Where did ${dino.name} live, or where have its fossils been found?`,
            // Mengisi properti answer pada objek atau konfigurasi.
            answer: knowledge.range
        // Menutup blok proses yang dimulai sebelumnya.
        },
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        {
            // Mengisi properti question pada objek atau konfigurasi.
            question: `What did ${dino.name} eat?`,
            // Mengisi properti answer pada objek atau konfigurasi.
            answer: knowledge.dietAnswer
        // Menutup blok proses yang dimulai sebelumnya.
        },
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        {
            // Mengisi properti question pada objek atau konfigurasi.
            question: `How large was ${dino.name}?`,
            // Mengisi properti answer pada objek atau konfigurasi.
            answer: dino.sourceUrl
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                ? `The official profile lists a length of ${dino.length}, a height of ${dino.height}, and a weight of ${dino.weight}.`
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                : `This archive lists a length of ${dino.length}, a height of ${dino.height}, and a weight of ${dino.weight}. These are approximate reference figures; measurements vary by specimen, and fictional hybrids have no fossil-based measurements.`
        // Menutup blok proses yang dimulai sebelumnya.
        },
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        {
            // Mengisi properti question pada objek atau konfigurasi.
            question: `When did ${dino.name} live?`,
            // Mengisi properti answer pada objek atau konfigurasi.
            answer: knowledge.period
        // Menutup blok proses yang dimulai sebelumnya.
        },
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        {
            // Mengisi properti question pada objek atau konfigurasi.
            question: `Which film, series, or game features ${dino.name}?`,
            // Mengisi properti answer pada objek atau konfigurasi.
            answer: `Recorded appearances: ${appearances.join(", ")}. ${knowledge.movieAnswer}`
        // Menutup blok proses yang dimulai sebelumnya.
        }
    // Mengakhiri daftar nilai yang sedang disusun.
    ];
    // Mengambil elemen halaman dan menyimpannya di faqList.
    const faqList = document.getElementById('dinoFaqList');
    // Mengganti isi elemen dengan konten yang baru.
    faqList.replaceChildren();

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    faqItems.forEach(item => {
        // Membuat elemen baru dan menyimpannya di entry.
        const entry = document.createElement('details');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        entry.className = 'dino-faq-item';

        // Membuat elemen baru dan menyimpannya di question.
        const question = document.createElement('summary');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        question.textContent = item.question;

        // Membuat elemen baru dan menyimpannya di answer.
        const answer = document.createElement('p');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        answer.textContent = item.answer;

        // Menambahkan elemen atau isi ke dalam DOM.
        entry.append(question, answer);
        // Menambahkan elemen atau isi ke dalam DOM.
        faqList.appendChild(entry);
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
}

// Menampilkan lokasi dan status containment specimen menurut media/franchise.
// Mendefinisikan fungsi renderContainmentTimeline untuk mengelompokkan proses terkait.
function renderContainmentTimeline(dino) {
    // Mengambil elemen halaman dan menyimpannya di timeline.
    const timeline = document.getElementById('containmentTimeline');
    // Menyimpan nilai yang diperlukan pada variabel sources.
    const sources = [...new Set([dino.movie, ...(Array.isArray(dino.media) ? dino.media : [])])];
    // Menyimpan nilai yang diperlukan pada variabel appearances.
    const appearances = sources.sort((a, b) => {
        // Menyimpan nilai yang diperlukan pada variabel aIndex.
        const aIndex = franchiseContainmentOrder.indexOf(a);
        // Menyimpan nilai yang diperlukan pada variabel bIndex.
        const bIndex = franchiseContainmentOrder.indexOf(b);
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return (aIndex < 0 ? franchiseContainmentOrder.length : aIndex)
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            - (bIndex < 0 ? franchiseContainmentOrder.length : bIndex);
    // Menutup blok proses yang dimulai sebelumnya.
    });
    // Menyimpan nilai yang diperlukan pada variabel primaryContext.
    const primaryContext = getContainmentContext(dino, dino.movie);
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('specPrimaryLocation').textContent =
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        `${primaryContext.location} (based on ${dino.movie})`;
    // Mengganti isi elemen dengan konten yang baru.
    timeline.replaceChildren();

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    appearances.forEach(source => {
        // Menyimpan nilai yang diperlukan pada variabel context.
        const context = getContainmentContext(dino, source);
        // Membuat elemen baru dan menyimpannya di item.
        const item = document.createElement('li');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        item.className = 'containment-timeline-entry';

        // Membuat elemen baru dan menyimpannya di title.
        const title = document.createElement('h4');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        title.textContent = source;

        // Membuat elemen baru dan menyimpannya di location.
        const location = document.createElement('p');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        location.className = 'containment-timeline-location';
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        location.textContent = context.location;

        // Membuat elemen baru dan menyimpannya di status.
        const status = document.createElement('p');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        status.textContent = context.status;

        // Menambahkan elemen atau isi ke dalam DOM.
        item.append(title, location, status);
        // Menambahkan elemen atau isi ke dalam DOM.
        timeline.appendChild(item);
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
}

// Memilih konteks containment spesifik specimen atau konteks umum franchise.
// Mendefinisikan fungsi getContainmentContext untuk mengelompokkan proses terkait.
function getContainmentContext(dino, source) {
    // Menyimpan nilai yang diperlukan pada variabel speciesContexts.
    const speciesContexts = speciesContainmentContexts[dino.id];
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (speciesContexts && speciesContexts[source]) {
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return speciesContexts[source];
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
    return franchiseContainmentContexts[source] || {
        // Mengisi properti location pada objek atau konfigurasi.
        location: "Location not established",
        // Mengisi properti status pada objek atau konfigurasi.
        status: "No location or containment details are recorded for this source."
    // Menutup blok proses yang dimulai sebelumnya.
    };
// Menutup blok proses yang dimulai sebelumnya.
}

// Menampilkan sumber DNA hybrid dan tautan ke profil komponen yang dikenal.
// Mendefinisikan fungsi renderDnaSplicing untuk mengelompokkan proses terkait.
function renderDnaSplicing(dino) {
    // Mengambil elemen halaman dan menyimpannya di panel.
    const panel = document.getElementById('dnaSplicingPanel');
    // Mengambil elemen halaman dan menyimpannya di componentList.
    const componentList = document.getElementById('dnaComponentList');
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    panel.hidden = dino.type !== 'Hybrid';
    // Mengganti isi elemen dengan konten yang baru.
    componentList.replaceChildren();
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (panel.hidden) return;

    // Menyimpan nilai yang diperlukan pada variabel record.
    const record = hybridDnaRecords[dino.id];
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('dnaSplicingNote').textContent = record
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        ? record.note
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        : 'The available story records do not specify this hybrid’s genetic components.';

    // Menyimpan nilai yang diperlukan pada variabel components.
    const components = record ? record.components : [];
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (components.length === 0) {
        // Membuat elemen baru dan menyimpannya di unknownComponent.
        const unknownComponent = document.createElement('li');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        unknownComponent.className = 'dna-component-undisclosed';
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        unknownComponent.textContent = 'Source species not disclosed';
        // Menambahkan elemen atau isi ke dalam DOM.
        componentList.appendChild(unknownComponent);
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return;
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Mengulangi proses untuk setiap item dalam kumpulan data.
    components.forEach(component => {
        // Membuat elemen baru dan menyimpannya di item.
        const item = document.createElement('li');
        // Menyimpan nilai yang diperlukan pada variabel componentContent.
        const componentContent = component.dinoId
            // Membuat elemen HTML baru untuk tampilan.
            ? document.createElement('button')
            // Membuat elemen HTML baru untuk tampilan.
            : document.createElement('span');
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (component.dinoId) {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            componentContent.type = 'button';
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            componentContent.className = 'dna-component-link';
            // Memasang penangan untuk merespons interaksi atau event.
            componentContent.addEventListener('click', () => showDetail(component.dinoId));
        // Menutup blok proses yang dimulai sebelumnya.
        }

        // Memeriksa kondisi sebelum memilih cabang proses.
        if (component.image) {
            // Membuat elemen baru dan menyimpannya di image.
            const image = document.createElement('img');
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            image.className = 'dna-component-image';
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            image.src = component.image;
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            image.alt = '';
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            image.loading = 'lazy';
            // Menambahkan elemen atau isi ke dalam DOM.
            componentContent.appendChild(image);
        // Menutup blok proses yang dimulai sebelumnya.
        }

        // Membuat elemen baru dan menyimpannya di name.
        const name = document.createElement('span');
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        name.textContent = component.name;
        // Menambahkan elemen atau isi ke dalam DOM.
        componentContent.appendChild(name);
        // Menambahkan elemen atau isi ke dalam DOM.
        item.appendChild(componentContent);
        // Menambahkan elemen atau isi ke dalam DOM.
        componentList.appendChild(item);
    // Menutup blok proses yang dimulai sebelumnya.
    });
// Menutup blok proses yang dimulai sebelumnya.
}

// Memperkirakan tingkat risiko dari identitas, diet, ukuran, dan tipe specimen.
// Mendefinisikan fungsi getEstimatedRiskLevel untuk mengelompokkan proses terkait.
function getEstimatedRiskLevel(dino) {
    // Memeriksa kondisi sebelum memilih cabang proses.
    if ([
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'therizinosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'brachiosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'triceratops',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'stegosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'mamenchisaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'ankylosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'stygimoloch',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'sinoceratops',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'corythosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'parasaurolophus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'iguanodon',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'ouranosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'kentrosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'spinoceratops',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'apatosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'dreadnoughtus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'titanosaurus'
    // Mengakhiri daftar nilai yang sedang disusun.
    ].includes(dino.id)) {
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return 'Moderate';
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Memeriksa kondisi sebelum memilih cabang proses.
    if ([
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'tyrannosaurus-rex',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'indominus-rex',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'indoraptor',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'velociraptor',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'spinosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'baryonyx',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'allosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'carnotaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'acrocanthosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'carcharodontosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'majungasaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'megalosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'suchomimus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'mosasaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'scorpios-rex',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'monolophosaurus',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'distortus-rex',
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        'mutadon'
    // Mengakhiri daftar nilai yang sedang disusun.
    ].includes(dino.id)) {
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return 'Extreme';
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Menyimpan nilai yang diperlukan pada variabel weight.
    const weight = Number.parseFloat(dino.weight.replace(/,/g, '')) || 0;
    // Menyimpan nilai yang diperlukan pada variabel lengthText.
    const lengthText = dino.length || '';
    // Menyimpan nilai yang diperlukan pada variabel length.
    const length = Number.parseFloat(lengthText) || 0;

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (dino.diet === 'Carnivore') return 'High';

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (dino.type === 'Hybrid') {
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return 'Moderate';
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (/wingspan/i.test(lengthText)) {
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (weight >= 200) return 'High';
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (weight >= 30) return 'Moderate';
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return 'Low';
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (dino.diet === 'Piscivore') {
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (length >= 12 || weight >= 8000) return 'Extreme';
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (length >= 8 || weight >= 1000) return 'High';
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (length >= 3 || weight >= 100) return 'Moderate';
        // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
        return 'Low';
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (dino.id === 'pachycephalosaurus') return 'Moderate';
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (length >= 20 || weight >= 20000) return 'High';
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (length >= 7 || weight >= 2000) return 'Moderate';
    // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
    return 'Low';
// Menutup blok proses yang dimulai sebelumnya.
}

// Mengisi seluruh informasi profil specimen lalu membuka tampilan detailnya.
// Mendefinisikan fungsi showDetail untuk mengelompokkan proses terkait.
function showDetail(dinoId, scrollToTop = true) {
    // Menyimpan nilai yang diperlukan pada variabel dino.
    const dino = dinosaurs.find(d => d.id === dinoId);
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!dino) return;
    // Memperbarui nilai variabel atau properti untuk status terbaru.
    activeDetailDinoId = dino.id;

    // Menyimpan nilai yang diperlukan pada variabel knowledge.
    const knowledge = dinosaurKnowledge[dino.id];
    // Menyimpan nilai yang diperlukan pada variabel detailName.
    const detailName = dino.type === "Hybrid" ? `${dino.name} (fictional hybrid)` : dino.species;
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('detailName').innerText = detailName;
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('detailSub').innerText = `${knowledge.family} • ${knowledge.period}`;
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('specFamily').innerText = knowledge.family;
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('specGenus').innerText = knowledge.genus;
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('specDiet').innerText = knowledge.diet;
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('specLength').innerText = dino.length;
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('specHeight').innerText = dino.height;
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('specWeight').innerText = dino.weight;
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('specEra').innerText = knowledge.period;
    // Menyimpan nilai yang diperlukan pada variabel riskLevel.
    const riskLevel = getEstimatedRiskLevel(dino);
    // Mengambil elemen halaman dan menyimpannya di riskLevelElement.
    const riskLevelElement = document.getElementById('specRiskLevel');
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    riskLevelElement.innerText = riskLevel;
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    riskLevelElement.className = `spec-value spec-status risk-level-${riskLevel.toLowerCase()}`;
    // Menyimpan nilai yang diperlukan pada variabel archiveSources.
    const archiveSources = [dino.movie, ...(Array.isArray(dino.media) ? dino.media : [])];
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('specMovie').innerText = [...new Set(archiveSources)].join(", ");
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    renderContainmentTimeline(dino);

    // Mengambil elemen halaman dan menyimpannya di detailImage.
    const detailImage = document.getElementById('detailImg');
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    setSpecimenImageFallback(detailImage);
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    detailImage.src = dino.image.replace('fit=crop', 'fit=clip');
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    detailImage.alt = dino.name;
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    detailImage.dataset.specimenId = dino.id;
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('detailTitle').innerText = `Archival Record: ${dino.name}`;
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('detailDesc').innerText = dino.description;
    // Memilih elemen halaman yang akan diproses.
    document.getElementById('videoPlaceholderName').textContent = dino.name;

    // Mengambil elemen halaman dan menyimpannya di detailVideoPanel.
    const detailVideoPanel = document.getElementById('detailVideoPanel');
    // Mengambil elemen halaman dan menyimpannya di detailVideo.
    const detailVideo = document.getElementById('detailVideo');
    // Mengambil elemen halaman dan menyimpannya di detailVideoEmbed.
    const detailVideoEmbed = document.getElementById('detailVideoEmbed');
    // Mengambil elemen halaman dan menyimpannya di detailVideoExternalLink.
    const detailVideoExternalLink = document.getElementById('detailVideoExternalLink');
    // Mengambil elemen halaman dan menyimpannya di videoPlaceholder.
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    // Mengambil elemen halaman dan menyimpannya di videoHint.
    const videoHint = videoPlaceholder.querySelector('.video-slot-hint');
    // Menyimpan nilai yang diperlukan pada variabel videoSource.
    const videoSource = specimenVideoFiles[dino.id];
    // Menyimpan nilai yang diperlukan pada variabel hasSpecimenVideo.
    const hasSpecimenVideo = !specimensWithoutVideo.has(dino.id);
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    detailVideoPanel.hidden = !hasSpecimenVideo;
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    stopSpecimenVideo();
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    detailVideoExternalLink.hidden = true;
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    detailVideoExternalLink.textContent = 'Open video on YouTube';
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    videoPlaceholder.hidden = false;
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    videoHint.textContent = 'Set an HTTPS MP4/WebM or YouTube watch/share URL in specimenVideoFiles in script.js. YouTube embeds need localhost or HTTPS hosting.';

    // Memeriksa kondisi sebelum memilih cabang proses.
    if (hasSpecimenVideo) {
        // Menyimpan nilai yang diperlukan pada variabel youtubeEmbedUrl.
        const youtubeEmbedUrl = getYouTubeEmbedUrl(videoSource);
        // Menyimpan nilai yang diperlukan pada variabel isYoutubeUrl.
        const isYoutubeUrl = /^https:\/\/(?:(?:www|m)\.)?(?:youtube\.com|youtu\.be)\//i.test(videoSource || '');
        // Menyimpan nilai yang diperlukan pada variabel canEmbedYouTube.
        const canEmbedYouTube = window.location.protocol !== 'file:';
        // Memeriksa kondisi sebelum memilih cabang proses.
        if (youtubeEmbedUrl && canEmbedYouTube) {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            detailVideoEmbed.src = youtubeEmbedUrl;
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            detailVideoEmbed.hidden = false;
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            detailVideoExternalLink.hidden = false;
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            detailVideoExternalLink.href = videoSource;
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            videoPlaceholder.hidden = true;
        // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
        } else if (youtubeEmbedUrl) {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            detailVideoExternalLink.href = videoSource;
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            detailVideoExternalLink.textContent = `Open ${dino.name} video on YouTube`;
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            detailVideoExternalLink.hidden = false;
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            videoHint.textContent = 'YouTube cannot embed on a local file page. Open the video on YouTube or run this site on localhost/HTTPS.';
        // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
        } else if (videoSource && !isYoutubeUrl) {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            detailVideo.src = videoSource;
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            detailVideo.hidden = false;
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            videoPlaceholder.hidden = true;
        // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
        } else if (isYoutubeUrl) {
            // Memeriksa kondisi sebelum memilih cabang proses.
            if (videoSource.includes('/results?search_query=')) {
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                detailVideoExternalLink.href = videoSource;
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                detailVideoExternalLink.textContent = `Open ${dino.name} videos on YouTube`;
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                detailVideoExternalLink.hidden = false;
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                videoHint.textContent = 'Search results are available on YouTube.';
            // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
            } else {
                // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
                videoHint.textContent = 'YouTube URL not recognized. Use a standard watch, youtu.be, or Shorts link.';
            // Menutup blok proses yang dimulai sebelumnya.
            }
        // Menjalankan cabang alternatif saat kondisi sebelumnya tidak terpenuhi.
        } else {
            // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
            videoHint.textContent = 'YouTube URL not recognized. Use a standard watch, youtu.be, or Shorts link.';
        // Menutup blok proses yang dimulai sebelumnya.
        }
    // Menutup blok proses yang dimulai sebelumnya.
    }

    // Memilih elemen halaman yang akan diproses.
    document.getElementById('dinoHistory').textContent = knowledge.history;
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    renderDnaSplicing(dino);
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    renderDinosaurFaq(dino, knowledge);

    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    switchView('detail', { scrollToTop, detailId: dinoId });
// Menutup blok proses yang dimulai sebelumnya.
}

// Membuka profil specimen sebelum atau sesudah specimen yang sedang dilihat.
// Mendefinisikan fungsi navigateSpecimen untuk mengelompokkan proses terkait.
function navigateSpecimen(direction) {
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (!activeDetailDinoId) return;

    // Menyimpan nilai yang diperlukan pada variabel navigationIds.
    const navigationIds = directoryDinoIds.includes(activeDetailDinoId)
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        ? directoryDinoIds
        // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
        : allDinoNavigationIds;
    // Menyimpan nilai yang diperlukan pada variabel currentIndex.
    const currentIndex = navigationIds.indexOf(activeDetailDinoId);
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (currentIndex < 0 || navigationIds.length === 0) return;

    // Menyimpan nilai yang diperlukan pada variabel nextIndex.
    const nextIndex = (currentIndex + direction + navigationIds.length) % navigationIds.length;
    // Menjalankan langkah proses untuk memperbarui data atau antarmuka.
    showDetail(navigationIds[nextIndex]);
// Menutup blok proses yang dimulai sebelumnya.
}

// Mengubah URL YouTube yang didukung menjadi URL embed yang aman untuk iframe.
// Mendefinisikan fungsi getYouTubeEmbedUrl untuk mengelompokkan proses terkait.
function getYouTubeEmbedUrl(source) {
    // Memeriksa kondisi sebelum memilih cabang proses.
    if (typeof source !== 'string') return null;

    // Menyimpan nilai yang diperlukan pada variabel youtubeUrl.
    const youtubeUrl = source.match(/^https:\/\/(?:(?:www|m)\.)?youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)([a-zA-Z0-9_-]{11})(?:[?&#/].*)?$/i);
    // Menyimpan nilai yang diperlukan pada variabel shortUrl.
    const shortUrl = source.match(/^https:\/\/youtu\.be\/([a-zA-Z0-9_-]{11})(?:[?&#/].*)?$/i);
    // Menyimpan nilai yang diperlukan pada variabel videoId.
    const videoId = youtubeUrl ? youtubeUrl[1] : shortUrl ? shortUrl[1] : null;

    // Mengembalikan hasil atau menghentikan fungsi pada kondisi ini.
    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
// Menutup blok proses yang dimulai sebelumnya.
}