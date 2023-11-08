<script setup>
import Contact2 from './Contact2.vue';
</script>
<template>
    <div  class="contact">
        <div data-aos="fade-right" class="form">
            <div class="info">
                <h2>Get in Touch</h2>

                <p>
                    You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can
                    also
                    use a quick contact form below or visit our office personally.
                </p>
                <br>
                <p>We would be happy to answer your questions.</p>
            </div>


            <form>
                <div class="flex_input">
                    <div class="inputs">
                        <label for="first_name">First name</label>
                        <input type="text" id="first_name">
                        <label for="last_name">Last name</label>
                        <input type="text" id="last_name">
                    </div>
                    <div class="inputs">
                        <label for="email">E-mail</label>
                        <input type="email" id="email">
                        <label for="phone">Phone</label>
                        <input type="number" id="phone">
                    </div>
                </div>

             <div class="textarea">
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
             </div>
                
                <button>SEND MESSAGE</button>
            </form>
        </div>
   <Contact2/>
    </div>
</template>
<style scoped>
.contact{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
    padding: 30px 0;
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 700px;
   
   
}
.form h2{
    margin-bottom: 40px;
}
.textarea{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
.textarea textarea{
    border-radius: 30px;
    font-size: 18px;
    padding: 10px;
    background-color: rgb(234, 248, 237);
    border: 1px solid rgb(187, 185, 185);
}


/* Optional style to hide the number input's stepper in Webkit browsers */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
}
.inputs {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    margin-top: 20px;
}

label {
    margin-bottom: 5px;
    font-size: 14px;
    color: rgb(150, 150, 150);
}

input {
    background-color: rgb(234, 248, 237);
    padding: 10px;
    border-radius: 30px;
    font-size: 18px;
    border: 1px solid rgb(187, 185, 185);
   
}

.flex_input {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

form {
    display: flex;
    flex-direction: column;
 
}
.info{
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    
}
.info p{
    color: gray;
}
input:focus {
  border: 2px solid var(--greenColor); /* Change the border style when in focus */
  outline: none; /* Remove the default outline (blue highlight) on focus, if desired */
}
form button{
    width: 200px;
    padding: 14px 0px;
    font-size: 16px;
    margin-top: 30px;
    border-radius: 30px;
    border: none;
    background-color: var(--greenColor);
    color: white;
    transition: .3s;
    font-weight: 600;
    cursor: pointer;
}
form button:hover{
 color: rgb(213, 212, 212);
}

@media only screen and (max-width: 600px) {
 .form{
    width: 100%;
    padding: 5px;
 }
}
</style>