import { useState } from 'react';
import level1 from '../../assets/Images/1.svg';
import level2 from '../../assets/Images/2.svg';
import level3 from '../../assets/Images/3.svg';
import level4 from '../../assets/Images/4.svg';
import level5 from '../../assets/Images/5.svg';
import level6 from '../../assets/Images/6.svg';
import level7 from '../../assets/Images/7.svg';
import level8 from '../../assets/Images/8.svg';

function Hangman({step}) {
    const img = [level1,level2,level3,level4,level5,level6,level7,level8];
    // console.log(step);
    

    return(
        <> 
           <div className="w-\[300px] h-\[300px]">
                <img src={step >= img.length ? img[img.length-1]:img[step]} alt="" />
            </div>
        
        </>
    )
    
}

export default Hangman;