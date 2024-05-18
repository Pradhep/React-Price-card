import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  let data = [
    {
      head: "Free",
      Price: "$0",
      li1:"Single User",
      li1enabler:true,
      li2:"5GB Storage",
      li2enabler:true,
      li3:"Unlimited Public Projects",
      li3enabler:true,
      li4:"Community Access",
      li4enabler:true,
      li5:"Unlimited Private Projects",
      li5enabler:false,
      li6:"Dedicated Phone Support",
      li6enabler:false,
      li7:"Free Subdomain",
      li7enabler:false,
      li8:"Monthly Status Reports",
      li8enabler:false
    },
    {
      head: "Plus",
      Price: "$9",
      li1:"5 Users",
      li1enabler:true,
      li2:"50GB Storage",
      li2enabler:true,
      li3:"Unlimited Public Projects",
      li3enabler:true,
      li4:"Community Access",
      li4enabler:true,
      li5:"Unlimited Private Projects",
      li5enabler:true,
      li6:"Dedicated Phone Support",
      li6enabler:true,
      li7:"Free Subdomain",
      li7enabler:true,
      li8:"Monthly Status Reports",
      li8enabler:false
    },
    {
      head: "Pro",
      Price: "$49",
      li1:"Unlimited Users",
      li1enabler:true,
      li2:"150GB Storage",
      li2enabler:true,
      li3:"Unlimited Public Projects",
      li3enabler:true,
      li4:"Community Access",
      li4enabler:true,
      li5:"Unlimited Private Projects",
      li5enabler:true,
      li6:"Dedicated Phone Support",
      li6enabler:true,
      li7:"Unlimited Free Subdomains",
      li7enabler:true,
      li8:"Monthly Status Reports",
      li8enabler:true
    }
  ]

  
return <>
   {
    
 
<section className="pricing py-5">
  <div className="container">
    <div className="row">
    {
    data.map((e,i)=>{
          return<>
      <div className="col-lg-4" key={i}>
        <div className="card mb-5 mb-lg-0">
          
          
          <div className="card-body" >
            
            <h5 className="card-title text-muted text-uppercase text-center">{e.head}</h5>
            <h6 className="card-price text-center">{e.Price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={e.li1enabler?"":"text-muted"}><span className="fa-li"><i className={e.li1enabler?"fas fa-check":"fas fa-times"}></i></span>{e.li3}</li>
              <li className={e.li2enabler?"":"text-muted"}><span className="fa-li"><i className={e.li2enabler?"fas fa-check":"fas fa-times"}></i></span>{e.li2}</li>
              <li className={e.li3enabler?"":"text-muted"}><span className="fa-li"><i className={e.li3enabler?"fas fa-check":"fas fa-times"}></i></span>{e.li4}</li>
              <li className={e.li4enabler?"":"text-muted"}><span className="fa-li"><i className={e.li4enabler?"fas fa-check":"fas fa-times"}></i></span>{e.li1}</li>
              <li className={e.li5enabler?"":"text-muted"}><span className="fa-li"><i className={e.li5enabler?"fas fa-check":"fas fa-times"}></i></span>{e.li5}</li>
              <li className={e.li6enabler?"":"text-muted"}><span className="fa-li"><i className={e.li6enabler?"fas fa-check":"fas fa-times"}></i></span>{e.li6}</li>
              <li className={e.li7enabler?"":"text-muted"}><span className="fa-li"><i className={e.li7enabler?"fas fa-check":"fas fa-times"}></i></span>{e.li7}</li>
              <li className={e.li8enabler?"":"text-muted"}><span className="fa-li"><i className={e.li8enabler?"fas fa-check":"fas fa-times"}></i></span>{e.li8}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
          <hr/>
         
        </div>
      </div>
      </>
    })
}

      
    </div>
  </div>
</section>
 
}

</>  
}

export default App

