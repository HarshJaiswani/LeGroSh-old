import React from "react";
import Footer from "./Footer/Footer";
import PageHeader from './PageHeader/PageHeader';
import BlogPost from "./BlogPost/BlogPost";
import './Article.css';

const Article = (props) => {
  return (
    <>
      <PageHeader UserName={props.UserName} back="" pos="absolute" pageName="Articles" pageDescp="The best way to experince other's life , Is to READ them." />
      <div className="articleContainer">
        <span  style={{
          borderLeft: '5px solid navy',
          fontSize: '1.2rem',
          padding: '0px 20px',
          margin: '20px 200px',
          letterSpacing: '1px',
          wordSpacing: '2px',
          fontFamily: 'sans-serif',
          fontStyle: 'italic',
          color: 'slategray'
        }}> I am a 18 years old boy, I am not someone the age of say 40+ or something so that , I could be able to share my experince but the day we are born we start experincing and learning things. These artiles will act as a medium for me to share my journey , learning and specially my mistakes to try and help you perform a bit better in you life. Hope you will enjoy !</span>
        <div className="articleStamp">
          <h2>Article Stamp</h2>
          <a href="/">heading</a>
          <a href="/">heading</a>
          <a href="/">heading</a>
          <a href="/">heading</a>
          <a href="/">heading</a>
          <a href="/">heading</a>
          <a href="/">heading</a>
          <a href="/">heading</a>
        </div>
          <BlogPost head="Heading" time="26th November 2021" tag="Special" descp="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus." />
          <BlogPost head="Heading" time="26th November 2021" tag="Special" descp="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus." />
          <BlogPost head="Heading" time="26th November 2021" tag="Special" descp="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus." />
          <BlogPost head="Heading" time="26th November 2021" tag="Special" descp="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus." />
          <BlogPost head="Heading" time="26th November 2021" tag="Special" descp="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia commodi necessitatibus nisi ut consequatur quia laboriosam molestiae saepe maiores numquam deserunt dignissimos, obcaecati expedita cum reprehenderit quidem accusantium doloribus." />
      </div>
      <Footer />
    </>
  );
};

export default Article;
