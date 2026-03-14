import React from 'react';
import { motion } from 'framer-motion';

interface NewsItemProps {
  image: string;
  category: string;
  title: string;
  date: string;
  link: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ image, category, title, date, link }) => (
  <a href={link} className="group block">
    <div className="overflow-hidden mb-4 relative aspect-[16/9] bg-gray-100">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold tracking-wider text-black">
        {category}
      </div>
    </div>
    <div>
      <h3 className="text-base font-medium leading-relaxed mb-2 group-hover:underline decoration-1 underline-offset-4 decoration-gray-400">
        {title}
      </h3>
      <p className="text-xs text-gray-400 tracking-widest font-mono">{date}</p>
    </div>
  </a>
);

const News: React.FC = () => {
  const newsItems = [
    {
      image: "/images/japanese_meeting.png",
      category: "NOTE",
      title: "【経営者必見】AI導入は「個人学習」では遅い！助成金で賢く進める「企業リスキリング」全貌",
      date: "2025. 09. 05",
      link: "#"
    },
    {
      image: "/images/japanese_training.png",
      category: "SEMINAR",
      title: "【9月ワークショップセミナー開催】「Copilotを活かしきる！！」",
      date: "2025. 09. 01",
      link: "#"
    },
    {
      image: "/images/japanese_pc_talking.png",
      category: "REPORT",
      title: "【札幌開催！】サマーワークショップセミナー（GAS x AI、SNS x AI）を開催しました！",
      date: "2025. 08. 31",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">最新情報</h2>
          <div className="w-12 h-px bg-gray-300 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NewsItem {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;