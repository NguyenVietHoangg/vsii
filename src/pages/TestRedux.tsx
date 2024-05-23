import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBreeds } from '../features/breedsSlice';
import { RootState, AppDispatch } from '../store/store';

//compontent
import Loading from '../components/StatusAPI/Loading';
import Error from '../components/StatusAPI/Error';

const TestRedux: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const breeds = useSelector((state: RootState) => state.breeds.breeds);
  const status = useSelector((state: RootState) => state.breeds.status);
  const error = useSelector((state: RootState) => state.breeds.error);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'call') {
      dispatch(fetchBreeds());
    }
  }, [status, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4 text-[20px] font-bold">Test Redux</h1>
      {loading && <Loading />}

      {error && !loading && <Error />}
      <div className="flex gap-4 flex-wrap">
        {!loading &&
          breeds.map((breed: any) => (
            <div
              key={breed.id}
              className="basis-1/5 flex flex-col justify-start items-start border border-solid border-line p-4 rounded-lg"
            >
              <h5 className="text-[14px] font-bold">
                {' '}
                {breed.attributes.name}
              </h5>
              <p className=" mt-3 text-[12px] text-start line-clamp-3">
                {' '}
                {breed.attributes.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TestRedux;
