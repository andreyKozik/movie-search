export default function preload() {
  document.querySelector('.background-loader').style.display = 'block';

  setTimeout(() => {
    document.querySelector('.background-loader').style.display = 'none'
  }, 2000);

}