export default function Card({ children, nopadding = false }) {
  const classes = `rounded-md shadow-gray-700 bg-gray-800 dark:bg-gray-800 ${nopadding ? 'p-0' : 'p-4'} mb-5 shadow-md dark:shadow-gray-700`;
  
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
  