import React, { useEffect, useState } from 'react';
 
async function fetchContributionData() {  
   
  try {
    const response = await fetch('https://api.github.com/repos/ita-social-projects/dokazovi-be/contributors');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}



// Компонент для відображення записів
function ContributionList() {
  const [contributionData, setContributionData] = useState([]);

  useEffect(() => {
    // Викликаємо функцію для отримання записів при першому рендері
    fetchContributionData().then((data) => {
      setContributionData(data);
    });
  }, []); // Порожній масив означає, що useEffect викликається тільки при першому рендері

  return (
    <div>
      <h2>Contribution Data</h2>
      <ul>
        {contributionData.map((item, index) => (
          // Виводимо окремий компонент для кожного запису
          <ContributionItem key={index} data={item} />
        ))}
      </ul>
    </div>
  );
}



// Компонент для відображення окремого запису
function ContributionItem({ data }) {
  return (
    <li>
      <strong>{data.login}</strong>: {data.contributions}
    </li>
  );
}

export default ContributionList;