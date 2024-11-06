import * as timelineContent from './timelineContent.json';

export default function TimelineDetails() {

  const getFormattedData = () => {
    let previousPosition = "";
    let previousCompany = "";
    let previousLocation = "";

    const formattedData = timelineContent.map(content => {
      const displayPosition = content.position !== previousPosition ? (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{content.position}</h3>
      ) : null;
      const displayCompany = content.company !== previousCompany ? (
        <h4 className="text-md text-gray-900 dark:text-white">{content.company}</h4>
      ) : null;
      const displayLocation = content.location !== previousLocation ? (
        <p className="text-sm text-gray-900 dark:text-white">{content.location}</p>
      ) : null;

      // Update previous values for the next iteration
      previousPosition = content.position;
      previousCompany = content.company;
      previousLocation = content.location;

      return {
        year: content.year,
        position: displayPosition,
        company: displayCompany,
        location: displayLocation,
        details: content.details,
        changedFromPrevious: content.position !== previousPosition || content.company !== previousCompany || content.location !== previousLocation
      };
    });

    return formattedData;
  };

  const formattedData = getFormattedData();

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-12">
      {formattedData.map((content) => {
        return (
          <li className="mb-10 ms-4" key={content.year}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{content.year}</time>
            {content.position}
            {content.company}
            {content.location}
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">{content.details}</p>
          </li>
        );
      })}
    </ol>
  );
}

