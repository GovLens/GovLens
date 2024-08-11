"use client";
import React, {useState, useEffect } from 'react';

const Proposals = ({ proposals }:any) => {
const [allProposals, setAllProposals] = useState<any[]>([]);
const [displayedProposals, setDisplayedProposals] = useState<any[]>([]);
    useEffect(() => {
        const getData = async () => {
            const data = await fetch('/api/get-proposals');
            const responseData = await data.json();
            const {
                proposalCreated1S,
                proposalCreated2S,
                proposalCreated3S,
                proposalCreateds,
              } = responseData.data;
      
             const newProposals = [
                ...proposalCreated1S,
                ...proposalCreated2S,
                ...proposalCreated3S,
                ...proposalCreateds,
              ].map((p) => ({
                ...p,
                votesLoaded: false,
              }));
              newProposals.sort(
                (a: any, b: any) => b.blockTimestamp - a.blockTimestamp
              );
            //   setAllProposals(newProposals);
              setAllProposals((prevProposals:any) => {
                const updatedProposals = [...prevProposals, ...newProposals];
                return updatedProposals.sort(
                  (a, b) => b.blockTimestamp - a.blockTimestamp
                )
                // .slice(0, 5);
              });
            //   setDisplayedProposals(allProposals.slice(0, 5));
        }
        getData();
    },[]);
  return (
    <div className="max-w-4xl mx-auto p-4 top-32">
      <h2 className="text-3xl font-bold text-center mb-8">Optimism Governance Proposals</h2>
      <div className="space-y-6">
        {allProposals?.map((proposal:any) => (
          <div key={proposal.proposalId} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                {/* <h3 className="text-xl font-semibold">{proposal.description}</h3> */}
                {/* <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(proposal.status)}`}>
                  {proposal.status}
                </span> */}
              </div>
              <p className="text-gray-600 mb-4">{proposal.description.slice(0,50)}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Proposer: {proposal.proposer}</span>
                {/* <span>Votes: {proposal.votes}</span> */}
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
              <button 
                className="ml-auto flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                onClick={() => console.log(`View details of proposal ${proposal.proposalId}`)}
              >
                View Details
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getStatusStyle = (status:any) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-blue-100 text-blue-800';
    case 'passed':
      return 'bg-green-100 text-green-800';
    case 'rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default Proposals;