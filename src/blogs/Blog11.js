import "../blog.css";
const Blog11 = () => {
  return (
    <div className="blog-container">
      <h1 className="title">Backend/Frameworks</h1>
      <h4 className="date">April 8, 2022 </h4>
      <h5 className="intro">
        This week we started learning Python for our back-end language. It was
        pair-programming all week so it was a nice change of pace compared to
        every other week. The project for this week was creating a RPG game
        'Evercraft' with a partner while ping-pong programming.
      </h5>

      <h2 className="questions">
      What are some similarities and differences you can see with JS and Python?

      </h2>
      <h5 className="answers">
      A major similarity between JS and Python is that most arithmetic operators
       work exactly the same. A lot of things are similar, but done with different wording.
        A major difference between JS and Python is the syntax and how they define code blocks. 
        JS uses curly braces to group statements and Python uses indentation. Their naming conventions are different, a
        s well, with JS using lower camel case and Python using snake case. Null vs None, Python contains float integers, 
        Arrays vs Lists, the == operator in Python works like the === operator in JS, JS has Switches and Python doesn't.

      </h5>

      <h2 className="questions">
      If you had started with Python instead of JS, how do you think the Bootcamp would be different? 
      Would you have benefited?

      </h2>
      <h5 className="answers">
      My eyes view HTML, CSS and JS as the building blocks of Web Development so I'm glad we started with JS first. 
      I could see an advantage of starting with Python due to readability, but I still feel that it would be easier 
      to switch from JS to Python than learning Python and switching to JS.
      </h5>


    </div>
  );
};

export default Blog11;
