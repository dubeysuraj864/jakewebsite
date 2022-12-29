import $ from "jquery"
import "../components/Questions.css"

function Questions() {

  $( document ).ready(function() {
    var base_color = "rgb(230,230,230)";
    var active_color = "rgb(237, 40, 70)";
    
    
    
    var child = 1;
    var length = $("section").length - 1;
    $("#prev").addClass("disabled");
    $("#submit").addClass("disabled");
    
    $("section").not("section:nth-of-type(1)").hide();
    $("section").not("section:nth-of-type(1)").css('transform','translateX(100px)');
    
    var svgWidth = length * 200 + 24;
    $("#svg_wrap").html(
      '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
        svgWidth +
        ' 24" xml:space="preserve"></svg>'
    );
    
    function makeSVG(tag, attrs) {
      var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
      for (var k in attrs) el.setAttribute(k, attrs[k]);
      return el;
    }
    
    for (var i = 0; i < length; i++) {
      var positionX = 12 + i * 200;
      var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
      document.getElementById("svg_form_time").appendChild(rect);
      // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
      var circle = makeSVG("circle", {
        cx: positionX,
        cy: 12,
        r: 12,
        width: positionX,
        height: 6
      });
      document.getElementById("svg_form_time").appendChild(circle);
    }
    
    var ccircle = makeSVG("circle", {
      cx: positionX + 200,
      cy: 12,
      r: 12,
      width: positionX,
      height: 6
    });
    document.getElementById("svg_form_time").appendChild(ccircle);
    
    $('#svg_form_time rect').css('fill',base_color);
    $('#svg_form_time circle').css('fill',base_color);
    $("circle:nth-of-type(1)").css("fill", active_color);
    
     
    $(".button").click(function () {
      $("#svg_form_time rect").css("fill", active_color);
      $("#svg_form_time circle").css("fill", active_color);
      var id = $(this).attr("id");
      if (id === "next") {
        $("#prev").removeClass("disabled");
        if (child >= length) {
          $(this).addClass("disabled");
          $('#submit').removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      } else if (id === "prev") {
        $("#next").removeClass("disabled");
        $('#submit').addClass("disabled");
        if (child <= 2) {
          $(this).addClass("disabled");
        }
        if (child > 1) {
          child--;
        }
      }
      var circle_child = child + 1;
      $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
        "fill",
        base_color
      );
      $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
        "fill",
        base_color
      );
      var currentSection = $("section:nth-of-type(" + child + ")");
      currentSection.fadeIn();
      currentSection.css('transform','translateX(0)');
     currentSection.prevAll('section').css('transform','translateX(-100px)');
      currentSection.nextAll('section').css('transform','translateX(100px)');
      $('section').not(currentSection).hide();
    });
    
    });

  return (
    <>
      <div className="body">
        <div id="svg_wrap" />
        <h1>Online Coaching</h1>
        <section>
          <p>How can I help you?</p>
          <button
            className="bg-[#ed2846] button text-white px-4 py-3 rounded-md shadow-xl my-2 focus:bg-[#f5516a]"
            type="button"
            onClick={() => {
              console.log("click");
            }}
            placeholder="Firstname"
          >
            {" "}
            Weight Loss
          </button>{" "}
          <br />
          <button
            className="bg-[#ed2846] button focus:bg-[#f5516a] text-white px-4 py-3 rounded-md shadow-xl my-2"
            type="button"
            onClick={() => {
              console.log("click");
            }}
            placeholder="Firstname"
          >
            {" "}
            Build Muscle
          </button>{" "}
          <br />
          <button
            className="bg-[#ed2846] button focus:bg-[#f5516a] text-white px-4 py-3 rounded-md shadow-xl my-2"
            type="button"
            onClick={() => {
              console.log("click");
            }}
            placeholder="Firstname"
          >
            {" "}
            Healthy Lifestyle
          </button>{" "}
          <br />
        </section>
        <section>
          <p>How do you identify?</p>
          <button
            className="bg-[#ed2846] button text-white px-4 py-3 rounded-md shadow-xl my-2 focus:bg-[#f5516a]"
            type="button"
            onClick={() => {
              console.log("click");
            }}
            placeholder="Firstname"
          >
            {" "}
            Female
          </button>{" "}
          <br />
          <button
            className="bg-[#ed2846] button focus:bg-[#f5516a] text-white px-4 py-3 rounded-md shadow-xl my-2"
            type="button"
            onClick={() => {
              console.log("click");
            }}
            placeholder="Firstname"
          >
            {" "}
            Male
          </button>{" "}
          <br />
          <button
            className="bg-[#ed2846] button focus:bg-[#f5516a] text-white px-4 py-3 rounded-md shadow-xl my-2"
            type="button"
            onClick={() => {
              console.log("click");
            }}
            placeholder="Firstname"
          >
            {" "}
            Other
          </button>{" "}
          <br />
        </section>
        <section>
          <p>I am</p>
          <button
            className="bg-[#ed2846] button text-white px-4 py-3 rounded-md shadow-xl my-2 focus:bg-[#f5516a]"
            type="button"
            onClick={() => {
              console.log("click");
            }}
            placeholder="Firstname"
          >
            {" "}
            Under 18
          </button>{" "}
          <br />
          <button
            className="bg-[#ed2846] button focus:bg-[#f5516a] text-white px-4 py-3 rounded-md shadow-xl my-2"
            type="button"
            onClick={() => {
              console.log("click");
            }}
            placeholder="Firstname"
          >
            {" "}
            18 - 24
          </button>{" "}
          <br />
          <button
            className="bg-[#ed2846] button focus:bg-[#f5516a] text-white px-4 py-3 rounded-md shadow-xl my-2"
            type="button"
            onClick={() => {
              console.log("click");
            }}
            placeholder="Firstname"
          >
            {" "}
            25+
          </button>{" "}
          <br />
        </section>
        <section>
          <p>What is your motivation to start now?</p>
          <textarea
            id="message"
            rows="8"
            class="block p-2.5 mt-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </section>
        <section>
          <p>Contact information</p>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="+44" />
          <input type="country" placeholder="United Kingdom" />
          {/* <select
            id="countries"
            class="bg-white border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white  dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select> */}
          <input type="text" placeholder="Your Instagram handle" />
        </section>
        <section>
          <p>Get ready!</p>
          <p>The application form has been filled out.</p>
        </section>

        <div className="button" id="prev">
          ← Previous
        </div>
        <div className="button" id="next">
          Next →
        </div>
        <div className="button" id="submit">
          Agree and send application
        </div>
      </div>
    </>
  );
}

export default Questions;
