interface FiltersProps {
    setFilter: React.Dispatch<React.SetStateAction<'all' | 'active' | 'completed'>>;
  }
  
  const Filters: React.FC<FiltersProps> = ({ setFilter }) => {
    return (
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
    );
  };
  
  export default Filters;
  