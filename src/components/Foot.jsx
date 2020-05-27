import React from 'react'
import { Helmet } from 'react-helmet'
import $ from 'jquery'
function Foot() {
    $.getScript("https://firebasestorage.googleapis.com/v0/b/my-project-1482573108901.appspot.com/o/assets%2Fjs%2Fjquery-3.2.1.min.js?alt=media&token=9eac711d-3a29-4750-b106-90b45e0a7946",function() {
    $.getScript("https://firebasestorage.googleapis.com/v0/b/my-project-1482573108901.appspot.com/o/assets%2Fjs%2Fplugins.min.js?alt=media&token=d42442aa-c745-4d18-99b2-f7b426b9e3ea",function() {
        $.getScript("https://firebasestorage.googleapis.com/v0/b/my-project-1482573108901.appspot.com/o/assets%2Fjs%2Fmain.js?alt=media&token=c357f622-ff78-4242-bdc8-4b98ce23a707"); 
      });
    });
    return (
        <div>

        </div>
    )
}

export default Foot
