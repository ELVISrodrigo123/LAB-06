import React from 'react';

interface BuyListProps {
    items: string[];
}

const BuyList: React.FC<BuyListProps> = ({ items }) => {
return (
    <div>
        <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    </div>
        );
};

export default BuyList;
