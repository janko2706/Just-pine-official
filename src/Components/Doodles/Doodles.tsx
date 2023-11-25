import React from "react";
import "css-doodle";

const Doodles = () => {
  const doodlesArray = [
    {
      doodle: `  @grid: 10 / 10vmin;
      @shape: circle;
                background: skyblue;
                scale: 1;
                opacity: 1;`,
    },
    {
      doodle: `   :doodle {
@grid: 10 / 10vmin;
  }
background: skyblue;
  transform: scale(@rand(.2, .9));`,
      seed: "2020",
    },
    {
      doodle: `  :doodle {
@grid: 10 / 10vmin;
  @shape: circle;
}
@even {
  @shape: hypocycloid 4;
  background: skyblue;
  transform: scale(2) rotate(-60deg);
}`,
    },
    {
      doodle: `
   @grid: 10 / 10vmin;
@place: center;
@size: calc(100% / 5 * @index);
opacity: calc(1.1 - 1 / 5 * @index);
z-index: calc(5 - @index);
background: skyblue;`,
    },
  ];
  return (
    <div className="gap- flex flex-wrap gap-20">
      {doodlesArray.map((item, index) => {
        return (
          <div key={index}>
            <css-doodle seed={item.seed && item.seed}>
              <style>{item.doodle}</style>
            </css-doodle>
          </div>
        );
      })}
    </div>
  );
};

export default Doodles;
