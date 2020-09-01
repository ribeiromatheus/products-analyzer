module.exports = function capitalizeFirstLetter(productStatus) {
  return productStatus.charAt(0).toUpperCase() + productStatus.slice(1);
}