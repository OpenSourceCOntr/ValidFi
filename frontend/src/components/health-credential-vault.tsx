'use client';

import { useState } from 'react';
import { Upload, Shield, FileText, Trash2, Syringe } from 'lucide-react';

interface HealthCredentialVaultProps {
  walletAddress: string;
}

export function HealthCredentialVault({ walletAddress }: HealthCredentialVaultProps) {
  const [credentials, setCredentials] = useState<any[]>([]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // In a real implementation, you would:
    // 1. Encrypt the file locally
    // 2. Upload to IPFS
    // 3. Generate hash
    // 4. Register on blockchain
    console.log('Uploading health credential:', file.name);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Health Credential Vault</h2>
      
      <div className="border-2 border-dashed border-green-400 rounded-lg p-8 mb-6 text-center hover:border-green-300 transition-colors">
        <Upload className="w-12 h-12 text-green-400 mx-auto mb-4" />
        <p className="text-white mb-4">Upload your vaccination records</p>
        <input
          type="file"
          onChange={handleUpload}
          className="hidden"
          id="file-upload"
          accept="image/*,.pdf"
        />
        <label
          htmlFor="file-upload"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg cursor-pointer transition-colors"
        >
          Select File
        </label>
      </div>

      <div className="space-y-4">
        {credentials.length === 0 ? (
          <div className="text-center py-8 text-green-200">
            <Syringe className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No health credentials uploaded yet</p>
          </div>
        ) : (
          credentials.map((credential) => (
            <div
              key={credential.id}
              className="bg-white/10 rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-white font-medium">{credential.vaccineType}</p>
                  <p className="text-green-200 text-sm">
                    Status: {credential.verificationStatus ? 'Verified' : 'Pending'}
                  </p>
                  <p className="text-green-200 text-sm">
                    Date: {credential.vaccinationDate}
                  </p>
                </div>
              </div>
              <button className="text-red-400 hover:text-red-300 transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
