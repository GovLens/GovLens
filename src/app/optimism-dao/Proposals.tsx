"use client";
import React, { useState, useEffect } from 'react';

const Proposals = ({ proposals }: { proposals: any[] }) => {
  const [allProposals, setAllProposals] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedProposals, setExpandedProposals] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/api/get-proposals');
        const responseData = await response.json();
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
        ].map((p: any) => ({
          ...p,
          votesLoaded: false,
        }));
        newProposals.sort(
          (a: any, b: any) => b.blockTimestamp - a.blockTimestamp
        );

        setAllProposals(prevProposals => [
          ...prevProposals,
          ...newProposals
        ].sort((a, b) => b.blockTimestamp - a.blockTimestamp));
      } catch (error) {
        console.error("Error fetching proposals:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const toggleDescription = (proposalId: string) => {
    setExpandedProposals(prev => ({
      ...prev,
      [proposalId]: !prev[proposalId]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 top-32">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Optimism Governance Proposals</h2>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-8">
          {allProposals?.map((proposal: any) => (
            <div key={proposal.proposalId} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-gray-700">{proposal.description.slice(0, 50)}...</h3>
                  <div className="relative group">
                    <a 
                      href={`https://optimism.blockscout.com/tx/${proposal.transactionHash}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block rounded-full overflow-hidden"
                    >
                      <img 
                        src="/icon/blockscout.jpg" 
                        alt="Blockscout Icon" 
                        className="h-6 w-6 object-cover rounded-full"
                      />
                    </a>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p>View txn hash on OP Blockscout explorer</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {expandedProposals[proposal.proposalId] 
                    ? proposal.description 
                    : `${proposal.description.slice(0, 100)}...`}
                </p>
                <button 
                  onClick={() => toggleDescription(proposal.proposalId)}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  {expandedProposals[proposal.proposalId] ? 'View Less' : 'View More'}
                </button>
                <div className="flex justify-between text-sm text-gray-500 mt-4">
                  <span><strong>Proposer:</strong> {proposal.proposer}</span>
                  <span><strong>Created:</strong> {new Date(proposal.blockTimestamp * 1000).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Proposals;
