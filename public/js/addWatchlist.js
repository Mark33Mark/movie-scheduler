
    const add_notice_checkbox = document.getElementById("add-notify");
    const add_preferences = document.getElementById("add-to-watchlist");
    const add_notice_label = document.getElementById("add-notice-period-label");
    const add_notice_period = document.getElementById("add-notice-period");
    const add_release_label = document.getElementById("add-release-label");
    const add_watchlist = document.getElementById("add-watchlist");


setUpForm = () => {
    add_preferences.style.display   ='none';
};

checkBoxChange = () =>{
    
    if(add_notice_checkbox.checked){

        add_notice_label.style.display  ='inline';
        add_notice_period.style.display ='inline';
        add_release_label.style.display ='inline';
    
    } else {

        add_notice_label.style.display='none';
        add_notice_period.style.display='none';
        add_release_label.style.display='none';
    }
};

const openFormHandler = () => {
    add_preferences.style.display   ='block';
    add_watchlist.style.display   ='none';
};

const createFormHandler = async ( event ) => {
    event.preventDefault();
    // get the checkbox status
    let notified = add_notice_checkbox.checked;

    // get the user selected notification period
      // get the user selected notification period
    if(notified===false){
        notification_period = null;
    } else {
    notification_period = notice_period.value.trim();
    }

    // get the post id from the url
    const path = window.location.pathname;
    const movie_id = path.slice(path.lastIndexOf("/")+1);

    console.log("HERE");

    console.log(movie_id, notified, notification_period);

            const response = await fetch( `/api/movie/${movie_id}`, {
            method: 'POST',
            body: JSON.stringify({ movie_id, notification_period, notified }),
            headers: {
                'Content-Type': 'application/json',
            },
            });

            window.location.reload(true);

            if (response.ok) {
            alert(`Your watchlist preference for Movie id: ${movie_id} has now been added.`);
            document.location.replace('/dashboard');

            } else {
            alert('Failed to add the movie to your watchlist.');
        }
};


const cancelButtonHandler = async (event) => {
    event.preventDefault();
    add_preferences.style.display ='none';
    add_watchlist.style.display   ='inline-block';
    return;
};


document
    .querySelector('#cancel-add-watchlist')
    .addEventListener('click', cancelButtonHandler);

setUpForm();