import React from "react";
import Footer from "./Footer/Footer";
import PageHeader from "./PageHeader/PageHeader";
import BlogPost from "./BlogPost/BlogPost";
import "./Article.css";
import data from "../Data";

const Article = (props) => {
  return (
    <>
      <PageHeader
        UserName={props.UserName}
        back=""
        pos="absolute"
        pageName="Articles"
        pageDescp="The best way to experince other's life , Is to READ them."
      />
      <div className="articleContainer">
        <span className="articletopspan">
          {" "}
          I am a 18 years old boy, I am not someone the age of say 40+ or
          something so that , I could be able to share my experince but the day
          we are born we start experincing and learning things. These artiles
          will act as a medium for me to share my journey , learning and
          specially my mistakes to try and help you perform a bit better in you
          life. Hope you will enjoy !
        </span>
        <div style={{ margin: "auto" }}>
          <BlogPost
            head={data.article1.heading}
            time={data.article1.date}
            descp={{
              part1: data.article1.post.part1,
              part2: data.article1.post.part2,
              part3: data.article1.post.part3,
              part4: data.article1.post.part4,
              part5: data.article1.post.part5,
              part6: data.article1.post.part6,
              part7: data.article1.post.part7,
              part8: data.article1.post.part8,
              part9: data.article1.post.part9,
            }}
          />
          <BlogPost
            head={data.article2.heading}
            time={data.article2.date}
            descp={{
              part1: data.article2.post.part1,
              part2: data.article2.post.part2,
              part3: data.article2.post.part3,
              part4: data.article2.post.part4,
              part5: data.article2.post.part5,
              part6: data.article2.post.part6,
              part7: data.article2.post.part7,
              part8: data.article2.post.part8,
              part9: data.article2.post.part9,
            }}
          />
          <BlogPost
            head={data.article3.heading}
            time={data.article3.date}
            descp={{
              part1: data.article3.post.part1,
              part2: data.article3.post.part2,
              part3: data.article3.post.part3,
              part4: data.article3.post.part4,
              part5: data.article3.post.part5,
              part6: data.article3.post.part6,
              part7: data.article3.post.part7,
              part8: data.article3.post.part8,
              part9: data.article3.post.part9,
            }}
          />
          <BlogPost
            head={data.article4.heading}
            time={data.article4.date}
            descp={{
              part1: data.article4.post.part1,
              part2: data.article4.post.part2,
              part3: data.article4.post.part3,
              part4: data.article4.post.part4,
              part5: data.article4.post.part5,
              part6: data.article4.post.part6,
              part7: data.article4.post.part7,
              part8: data.article4.post.part8,
              part9: data.article4.post.part9,
            }}
          />
          <BlogPost
            head={data.article5.heading}
            time={data.article5.date}
            descp={{
              part1: data.article5.post.part1,
              part2: data.article5.post.part2,
              part3: data.article5.post.part3,
              part4: data.article5.post.part4,
              part5: data.article5.post.part5,
              part6: data.article5.post.part6,
              part7: data.article5.post.part7,
              part8: data.article5.post.part8,
              part9: data.article5.post.part9,
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
