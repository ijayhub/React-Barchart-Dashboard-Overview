import React, { useState } from 'react'
import { BsFileEarmarkPdf } from "react-icons/bs"
import { BsFileEarmarkWord } from 'react-icons/bs';
import { BsFileEarmarkX } from 'react-icons/bs';
import { AiOutlineContainer } from 'react-icons/ai';

const data = [
	{
		id: 1,
		icon: <BsFileEarmarkPdf className='text-red-800' />,
		title: 'Proposal',
		date: '17-07-2022',
		paragraph:
			"Efficiently leverage other's sticky content with backward-compatible systems. Assertively scale distinctive action items vis-a-vis global technologies. Professionally synthesize distributed infrastructures without equity invested synergy.",
	},
	{
		id: 2,
		icon: <BsFileEarmarkWord className='text-blue-400' />,
		date: '17-07-2022',
		title: 'Terms',
		paragraph:
			"Efficiently leverage other's sticky content with backward-compatible systems. Assertively scale distinctive action items vis-a-vis global technologies. Professionally synthesize distributed infrastructures without equity invested synergy.",
	},
	{
		id: 3,
		icon: <BsFileEarmarkX className='text-green-400' />,
		date: '17-07-2022',
		title: 'Budget',
		paragraph:
			"Efficiently leverage other's sticky content with backward-compatible systems. Assertively scale distinctive action items vis-a-vis global technologies. Professionally synthesize distributed infrastructures without equity invested synergy.",
	},
	{
		id: 4,
		icon: <AiOutlineContainer className='text-blue-400' />,
		date: '17-07-2022',
		title: 'Contract',
		paragraph:
			"Efficiently leverage other's sticky content with backward-compatible systems. Assertively scale distinctive action items vis-a-vis global technologies. Professionally synthesize distributed infrastructures without equity invested synergy.",
	},

	{
		id: 5,
		icon: <BsFileEarmarkWord className='text-green-400' />,
		date: '17-07-2022',
		title: 'Proposal',
		paragraph:
			"Efficiently leverage other's sticky content with backward-compatible systems. Assertively scale distinctive action items vis-a-vis global technologies. Professionally synthesize distributed infrastructures without equity invested synergy.",
	},
];

const Documents = () => {
	const[documents]=useState(data)
	return (
		<div className='max-width py-10'>
			<div>
				<h2 className='lg:text-3xl my-10 mx-3 lg:mx-0'>Documents</h2>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{documents.map((document) => (
					<div
						key={document.id}
						className='shadow-2xl p-8 rounded-2xl hover:bg-emerald-300 mx-3 lg:mx-0'>
						<div className='text-4xl'>{document.icon}</div>
						<h2 className='my-8'>{document.title}</h2>
						<p>{document.paragraph}</p>
						<div className='mt-8 text-center'>
							<small>{document.date}</small>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Documents
