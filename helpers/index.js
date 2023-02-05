
 function FormatearD(precio) {
  return precio.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
    
}
export {FormatearD};


