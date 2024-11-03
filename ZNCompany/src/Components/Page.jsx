import addNotification from "react-push-notification";
import logo from '/imgs/logo.png'

const Page = () => {

  const buttonClick = () => {
      addNotification({
          title: 'Warning',
          subtitle: 'This is a subtitle',
          message: 'This is a very long message',
          theme: 'darkblue',
          backgroundTop: 'green',
          duration:10000,
         
      });
      console.log('show notification')
  };

  return (
    <div className="page">
        <button onClick={buttonClick} className="button">
         Hello world.
        </button>
    </div>
  );
}

export default Page;