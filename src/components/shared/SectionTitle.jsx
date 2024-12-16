import React from 'react';

const SectionTitle = ({heading,title,subTitle,headingStyle,titleStyle,subTitleStyle}) => {
    return (
        <div className='space-y-6'>
            <h3 className={`${headingStyle} text-primary font-bold`}>{heading}</h3>
            <h2 className={`${titleStyle} text-4xl font-bold`}>{title}</h2>
            <p className={`${subTitleStyle} `}>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;