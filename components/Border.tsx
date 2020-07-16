import React, { FC, useState, useEffect } from "react";

type BorderProps = {
  loading: boolean
  duration: number
  width: string
}

export const Border: FC<BorderProps> = ({ loading, duration, width }) => {
  
  const style: any = {
    "--border-width": `${width}`,
    "--border-color": `linear-gradient(130deg, var(--color-accent), #ecb042)`,
    "--border-animation-delay": `${-duration / 2}s`,
    "--border-animation-duration": `${duration}s`,
    "--border-animation-loop": `1`,
    "--border-animation-play-state": loading ? "running" : "paused"
  };
  
  return <>
    <style jsx>{`
      @keyframes border {
        0% { /*================ Full Border ================*/
          clip-path: polygon(0 0, 0 var(--border-width), 100% var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) 100%, calc(100% - var(--border-width)) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) 0, 0 0, 0 100%, 100% 100%, 100% 0,)
        }
        12.5% { /*================ Remove TopLeft to TopRight ================*/
          clip-path: polygon(calc(100% - 1 * var(--border-width)) 0, calc(100% - var(--border-width)) var(--border-width), 100% var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) 100%, calc(100% - var(--border-width)) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) 0, 0 0, 0 100%, 100% 100%, 100% 0,)
        }
        25% { /*================ Remove TopRight to BottomRight ================*/
          clip-path: polygon(calc(100% - 1 * var(--border-width)) calc(100% - 1 * var(--border-width)), calc(100% - var(--border-width)) calc(100% - var(--border-width)), 100% calc(100% - var(--border-width)), calc(100% - var(--border-width)) calc(100% - var(--border-width)), calc(100% - var(--border-width)) 100%, calc(100% - var(--border-width)) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) 0, 0 0, 0 100%, 100% 100%, 100% calc(100% - var(--border-width)),)
        }
        37.5% { /*================ Remove BottomRight to BottomLeft ================*/
          clip-path: polygon(var(--border-width) calc(100% - 1 * var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) 100%, var(--border-width) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) 0, 0 0, 0 100%, var(--border-width) 100%, var(--border-width) calc(100% - var(--border-width)),)
        }
        50% { /*================ Remove BottomLeft to TopLeft - Empty ================*/
          clip-path: polygon(var(--border-width) 0, var(--border-width) 0, var(--border-width) 0, var(--border-width) 0, var(--border-width) 0, var(--border-width) 0, 0 0, var(--border-width) 0, var(--border-width) 0, 0 0, 0 0, var(--border-width) 0, var(--border-width) 0,)
        }
        51% { /*================ Empty ================*/
          clip-path: polygon(0 0, 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 0,)
        }
        62.5% { /*================ TopLeft to TopRight ================*/
          clip-path: polygon(0 0, 0 var(--border-width), 100% var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), 100% var(--border-width), 100% 0,)
        }
        75% { /*================ TopRight to BottomRight ================*/
          clip-path: polygon(0 0, 0 var(--border-width), 100% var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) 100%, calc(100% - var(--border-width)) calc(100% - var(--border-width)), calc(100% - var(--border-width)) calc(100% - var(--border-width)), calc(100% - var(--border-width)) calc(100% - var(--border-width)), calc(100% - var(--border-width)) calc(100% - var(--border-width)), calc(100% - var(--border-width)) calc(100% - var(--border-width)), calc(100% - var(--border-width)) 100%, 100% 100%, 100% 0,)
        }
        87.5% { /*================ BottomRight to BottomLeft ================*/
          clip-path: polygon(0 0, 0 var(--border-width), 100% var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) 100%, calc(100% - var(--border-width)) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), 0 100%, 100% 100%, 100% 0,)
        }
        100% { /*================ BottomLeft to TopLeft - Full Border ================*/
          clip-path: polygon(0 0, 0 var(--border-width), 100% var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) 100%, calc(100% - var(--border-width)) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) 0, 0 0, 0 100%, 100% 100%, 100% 0,)
        }
      }
      
      :root {
        --border-width: 6px;
        --border-color: linear-gradient(180deg, var(--color-accent), #fff200);
        --border-animation-delay: 2.5s;
        --border-animation-duration: 5s;
        --border-animation-loop: infinite;
      }
      
      .border {
        position: relative;
        width: 100%;
        height: 100%;
        background: var(--border-color);
        animation-name: border;
        animation-duration: var(--border-animation-duration);
        animation-timing-function: linear;
        animation-play-state: var(--border-animation-play-state);
        animation-delay: var(--border-animation-delay);
        animation-iteration-count: var(--border-animation-loop);
        animation-fill-mode: both;
      }
    `}</style>
    <div style={style} className="border" />
  </>;
};