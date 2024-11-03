import gsap from "gsap/all"

export const modleAnimation = (itemId,itemContentId,itemWidth)=>{
  gsap.to(itemId,{
    minWidth:itemWidth,
    duration:.4
 
  })
  gsap.to(itemContentId,{
    opacity:1,
    delay:.2
  })
}


// push notifications to the users by services workers
export const checkNotification =()=>{
  if (!("serviceWorker" in navigator)) {  
      throw new Error("No Support for service worker")
    }
  if(!('Notification' in window)){
    throw new Error ("No support for notification API")
  }

}
export const swRegister=async()=>{
  const registration = await navigator.serviceWorker.register('sw.js')
  return registration;
}


export const requestNotificationPermission = async ()=>{
//   if (Notification.permission !== "granted") {
//     Notification.requestPermission().then(permission => {
//         if (permission === "granted") {
//             sendNotification();
//         }
//     });
// } else {
//     sendNotification();
// }
if ("Notification" in window) {
  // Check the current permission status
  if (Notification.permission === "granted") {
      // Permission has already been granted
      console.log("Notification permission granted.");
  } else if (Notification.permission === "denied") {
      // Permission has been denied
      console.log("Notification permission denied.");
  
      // Permission has not been requested yet, so let's ask for it
      Notification.requestPermission().then(function(permission) {
          // Check the user's response
          if (permission === "granted") {
              console.log("Notification permission granted.");
              // You can show a notification here if needed
          } else if (permission === "denied") {
              console.log("Notification permission denied.");
          } else {
              console.log("Notification permission dismissed.");
          }
      }).catch(function(error) {
          console.error("Error requesting notification permission:", error);
      });
  }
} else {
  console.log("This browser does not support notifications.");
}

  // const permission = await Notification.requestPermission();
  // if(permission !=='granted'){
  //     alert('not garnted')
  //     throw new Error("Notification permission not granted")
  // }else {
  //      sendNotification()
  //      alert('granted')
  // }
}

export function sendNotification() {
  const options = {
      body: "You have logged in",
      icon: "/path/to/icon.png" // optional, but can make the notification look nice
  };
  new Notification("Login Successful", options);
}
