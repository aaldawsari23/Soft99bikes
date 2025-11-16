// Elements
const fileInput = document.getElementById('fileInput');
const uploadBox = document.getElementById('uploadBox');
const uploadSection = document.querySelector('.upload-section');
const previewSection = document.getElementById('previewSection');
const previewImage = document.getElementById('previewImage');
const imageLink = document.getElementById('imageLink');
const copyMessage = document.getElementById('copyMessage');

// File input change handler
fileInput.addEventListener('change', handleFileSelect);

// Drag and drop handlers
uploadBox.addEventListener('click', () => fileInput.click());

uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.classList.add('drag-over');
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.classList.remove('drag-over');
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.classList.remove('drag-over');

    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
        handleFile(files[0]);
    }
});

// Handle file selection
function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        handleFile(file);
    }
}

// Handle file processing
function handleFile(file) {
    const reader = new FileReader();

    reader.onload = function(e) {
        const dataUrl = e.target.result;

        // Display image
        previewImage.src = dataUrl;

        // Generate direct link (in this case, it's a data URL)
        // For a real implementation, you would upload to a server and get a URL
        imageLink.value = dataUrl;

        // Show preview section, hide upload section
        uploadSection.style.display = 'none';
        previewSection.style.display = 'block';
    };

    reader.readAsDataURL(file);
}

// Copy link function
function copyLink() {
    imageLink.select();
    imageLink.setSelectionRange(0, 99999); // For mobile devices

    // Copy to clipboard
    navigator.clipboard.writeText(imageLink.value).then(() => {
        // Show success message
        copyMessage.classList.add('show');

        // Hide message after 2 seconds
        setTimeout(() => {
            copyMessage.classList.remove('show');
        }, 2000);
    }).catch(err => {
        // Fallback for older browsers
        document.execCommand('copy');
        copyMessage.classList.add('show');
        setTimeout(() => {
            copyMessage.classList.remove('show');
        }, 2000);
    });
}

// Reset upload
function resetUpload() {
    fileInput.value = '';
    previewImage.src = '';
    imageLink.value = '';
    uploadSection.style.display = 'block';
    previewSection.style.display = 'none';
}

// Prevent default drag behavior on the whole page
document.addEventListener('dragover', (e) => e.preventDefault());
document.addEventListener('drop', (e) => e.preventDefault());

console.log('✅ Soft99bikes Image Upload - Ready!');
