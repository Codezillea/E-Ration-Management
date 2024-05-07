const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{html,js}",
  flowbite.content(),],
  theme: {
    extend: {
      height:
      {
        '104':'30rem',
        '200':'34rem'
      },
      width:
      {
        '104':'26rem',
        '200':'35rem'
      }
     
      
  },
  plugins: [
    flowbite.plugin()
    
   
  ],
}
}