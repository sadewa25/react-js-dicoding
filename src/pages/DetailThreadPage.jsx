import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailInformationThread from '../components/DetailInformationThread';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetThreadDetail } from '../states/threadDetail/action';

function DetailThreadPage() {
    
    const {id} = useParams();

    const dispatch = useDispatch();

    const {
        detailThread = {},
    } = useSelector((states) => states);

    useEffect(() => {
        dispatch(asyncGetThreadDetail({
            id
        }))
      }, [dispatch]);

    return (
        <section className="home-page">
            <DetailInformationThread data={detailThread} />
        </section>
    )
}

export default DetailThreadPage