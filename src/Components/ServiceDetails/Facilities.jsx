const Facilities = ({ facility }) => {
  return (
    <div className="card bg-[#F3F3F3] p-10 rounded-md border-t border-solid border-t-primary">
      <div>
        <p className="card-title">{facility.name}</p>
        <p className="card-body p-0">{facility.details}</p>
      </div>
    </div>
  );
};

export default Facilities;
