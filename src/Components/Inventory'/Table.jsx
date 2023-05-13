const Table = ({ dt, handleDelete, handleConfirm }) => {
  return (
    <div>
      <div className="overflow-x-auto w-full mt-6">
        <table className="table w-full">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <button
                  onClick={() => handleDelete(dt._id)}
                  className="btn btn-primary"
                >
                  X
                </button>
              </th>
              <td className="w-1/2">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={dt.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{dt.service}</div>
                    <div className="text-sm opacity-50">{dt.message}</div>
                  </div>
                </div>
              </td>
              <td>${dt.price}</td>

              <th>
                {dt.status ? (
                  <p className="text-primary">Confirm</p>
                ) : (
                  <button
                    onClick={() => handleConfirm(dt._id)}
                    className="btn btn-outline btn-primary btn-xs"
                  >
                    Confirm
                  </button>
                )}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
