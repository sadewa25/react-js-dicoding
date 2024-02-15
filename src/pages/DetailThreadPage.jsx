import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailInformationThread from '../components/DetailInformationThread';
import { useSelector, useDispatch } from 'react-redux';
import { asyncAddThreadDetail, asyncGetThreadDetail } from '../states/threadDetail/action';

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

    const onAddComment = ({comment}) => {

        const content = comment.comment

        dispatch(asyncAddThreadDetail({
            id,
            content
        }));

        dispatch(asyncGetThreadDetail({
            id
        }))

        
    }

    return (
        <section className="home-page">
            <DetailInformationThread data={detailThread} addComment={onAddComment} />
        </section>
    )
}

export default DetailThreadPage