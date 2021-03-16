let page = `
<div class="header">
            <div class="header-wrapper">
                <div class="row-header">
                    <img class = "logo" src="../img/logo-rackspace.svg" alt="">
                    <p><a href="#" class="links">Support Home </a> | <a href="#" class="links">Support Home </a></p>
                </div>
             </div>
        </div>
   
    <div class="container">
        <div class="title-wrapper">
            <h1 class="title-1">System Status</h1>
        </div>
    
        <div class="row">
            
                <div class="col-1">
                   <!-- <button class="button" id="btn-1"><i class="far fa-plus-square"></i> Show Text</button> -->
                   <p>Our System Status is a real-time view of the performance and uptime of our email 
                       apps and services. If you're a customer, please bookmark this page and check back if you experience an email disruption.
                       Our System Status is a real-time view of the performance and uptime of our email 
                       apps and services. If you're a customer, please bookmark this page and check back if you experience an email disruption.
                       Our System Status is a real-time view of the performance and uptime of our email 
                       apps and services. If you're a customer, please bookmark this page and check back if you experience an email disruption.
                </p>
                 </div>

                 <div class="col-2 warning-1">
                    <!-- <button class="button" id="btn-2"><i class="far fa-plus-square"></i> Show Text</button> -->
                    <p class="show">Our award-winning Fanatical Support® team is always available! Call or chat with your dedicated support team at anytime by
                         logging into your <a href ="#" class="links">control panel.</a></p>
                  </div>
            
        </div>
    </div>

    <div class="container">
        <!-- <div class="row"> -->
            
            <div class="col-body">
                <div class="heads">
                    <h2>Monday Jan 2, 2020</h2>
                </div>
              
                <table id="table">
                    <thead>
                    <tr>
                        <td>Product</td>
                        <td>Product</td>
                        <td>Time</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i class="far fa-plus-square"></i>Host Exchange</td>
                       
                            <td class="hide">System is operating normally</td>
                       
                        <td><i class="far fa-check-circle"></i>System is operating normally</td>
                        <td>9:25 PM EDT</td>
                        <td id ="noshow"> 
                             <tr>
                            <td><i class="far fa-plus-square"></i>Host Exchange</td>
                           
                                <td class="hide">System is operating normally</td>
                           
                            <td><i class="far fa-check-circle"></i>System is operating normally</td>
                            <td>9:25 PM EDT</td>
                        </tr>
                    </td>
                       
                    </tr>
                
                    <tr>
                        <td><i class="far fa-plus-square"></i>Host Exchange</td>
                        <td><i class="far fa-check-circle"></i>System is operating normally</td>
                        <td>9:25 PM EDT</td>
                        
                    </tr>
                    <tr>
                        <td><i class="far fa-plus-square"></i>Host Exchange</td>
                        <td><i class="far fa-check-circle"></i>System is operating normally</td>
                        <td>9:25 PM EDT</td>
                        
                    </tr>
                    <tr>
                        <td><i class="far fa-plus-square"></i>Host Exchange</td>
                        <td><i class="far fa-check-circle"></i>System is operating normally</td>
                        <td>9:25 PM EDT</td>
                        
                    </tr>
                </tbody>
                </table>
            </div>
        <!-- </div> -->
    </div>
   
    <div class="container">
        <!-- <div class="row"> -->
            
            <div class="col-body">
                <div class="row col-3">
                       <h2>History (4 weeks)</h2>
                       <p><a href ="" class = "links">Back</a> | <a href ="" class = "links">Forward</a></p>
                   
                </div>
                
                <table id="table">
                    <thead>
                    <tr>
                        <td>Product</td>
                        <td>Product</td>
                        <td>Time</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i class="far fa-plus-square"></i>Host Exchange</td>
                       
                            <td class="hide">System is operating normally</td>
                       
                        <td><i class="far fa-check-circle"></i>System is operating normally</td>
                        <td>9:25 PM EDT</td>
                        <td id ="noshow"> 
                             <tr>
                            <td><i class="far fa-plus-square"></i>Host Exchange</td>
                           
                                <td class="hide">System is operating normally</td>
                           
                            <td><i class="far fa-check-circle"></i>System is operating normally</td>
                            <td>9:25 PM EDT</td>
                        </tr>
                    </td>
                       
                    </tr>
                
                    <tr>
                        <td><i class="far fa-plus-square"></i>Host Exchange</td>
                        <td><i class="far fa-check-circle"></i>System is operating normally</td>
                        <td>9:25 PM EDT</td>
                        
                    </tr>
                    <tr>
                        <td><i class="far fa-plus-square"></i>Host Exchange</td>
                        <td><i class="far fa-check-circle"></i>System is operating normally</td>
                        <td>9:25 PM EDT</td>
                        
                    </tr>
                    <tr>
                        <td><i class="far fa-plus-square"></i>Host Exchange</td>
                        <td><i class="far fa-check-circle"></i>System is operating normally</td>
                        <td>9:25 PM EDT</td>
                        
                    </tr>
                </tbody>
                </table>
            </div>
        <!-- </div> -->
    </div>

    <div class="container">
        <!-- <div class="row"> -->
            
            <div class="col-body">
                <div class="row col-3">
                       <h2>Alerts & Maintenance</h2>
                       <p><a href ="" class = "links">Maintenance Policy</a></p>
                   
                </div>
                
                <div class="warning">
                    <h2>Alert: Hosted Exchange - (HAFNIUM)</h2>
                    <p>Our engineering team is aware of the vulnerabilities recently announced by Microsoft for Hosted Exchange. We have patched the Hosted Exchange Infrastructure per their recommendations and actively scanning for any indicators of a compromise.

                    Should we need to take any additional action for individual customers, we will communicate with them directly.      </p>
                </div>
    </div>
   

`
const pageLoader =()=>{
const root = document.getElementById('root');
root.innerHTML = page;
}

pageLoader();

