import React, { FunctionComponent, useState } from 'react';

interface AddCommentProps {
    submitHandler: (email: string, comment: string) => void;
}

const AddComment: FunctionComponent<AddCommentProps> = ({ submitHandler }) => {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setComment('');
        setEmail('');
        submitHandler(email, comment);
    };

    return (
        <>
            <div className="border-2 border-teal-600 bg-yellow-200">
                <form onSubmit={(e) => onSubmit(e)} action="" className='ml-4 mb-4'>
                    <h2 className='mb-2 font-bold'>Dodajte svoj komentar:</h2>
                    <p>E-mail:</p>
                    <input
                        onChange={(e) => setEmail(e?.target?.value) }
                        type="text"
                        name=""
                        id="email"
                        placeholder="E-mail"
                        className='w-6/12 hover:shadow-lg'
                    />
                    <p>Komentar:</p>
                    <input
                        onChange={(e) => setComment(e?.target?.value)}
                        type="text"
                        name=""
                        id="comment"
                        placeholder="Vaš komentar"
                        className='w-6/12 hover:shadow-lg'
                    />
                    <button type="submit" className='bg-sky-700 hover:text-white bg-sky-700 '>
                        Pošalji komentar
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddComment;
