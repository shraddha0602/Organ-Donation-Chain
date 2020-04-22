# Organ-Donation-Chain
## About Organ Donation Chain :
- Integrate Blockchain Technology and Organ Transplantchain to achieve a system that could guarantee privacy,transparency and immutability.
- Keep a detailed record and transaction history of eachaction performed by each party and hence to prevent anyvulnerabilities caused by tampering or privacy related issues.
- Trace down any individual or party who attempts to gainprofit or involve in prohibited or illegal transactions.

## Methodology

<img src="https://drive.google.com/uc?export=view&id=1czA4nv0aYVicTWEi5pUdscUzYbDyP0nQ" width="70%"><br /> <br />

### Architecture of the Network :
<img src="https://drive.google.com/uc?export=view&id=1v9jTBYHB84zQA5iEG0b8e0JbwmKSeNdV" width="50%">


The donors and the recipients registers themselves by filling in the necessary de-tails.  When the donors and the recipients are registered, they are added as par-ticipants in the network.  Hospitals in involved are also participants in our net-work.   The Hospitals register themselves by providing necessary details.   Eachparticipant donor and recipient are registered under a hospital which will performdonation or transplant operation.

When a registered donor donates organ(s),  the registered hospital of the donorupdates information about the organ, creating an asset Organ in the network. Theconcerning hospital with permission of the donor can create the Organ asset, up-date organ information and upload necessary reports.  Similarly, the recipient’shospitals with the permission of the recipient can upload recipients report into thenetwork to broadcast the request of the needed organ with specified details.

To get the organ needed by the patient,  the recipient’s hospital,  broadcasts therequest by sending the report containing specifications of the organ needed to allhospitals of that specific organ. The hospitals to whom the request was broadcastreply with donors organ specification report. Finally, the recipients hospital send aconfirmation after choosing the needed organ by running their custom algorithmfor  organ  matching.   These  operations  are  expected  to  run  on  cloud  while  theblockchain would maintain the status of the assets and concerning participantsensuring that no illegal activities or false information updates are carried out.

## Screenshots
### Homepage
<img src="https://drive.google.com/uc?export=view&id=1v90hzgc8N-gLXyiDzSVKZhtJFCDbQ2qo" width="70%">

### Donor Registration
<img src="https://drive.google.com/uc?export=view&id=16bRXBzmmP8xTu03ThiAPEg7AvWCjY8BU" width="70%">

### Recipient Registration
<img src="https://drive.google.com/uc?export=view&id=16bRXBzmmP8xTu03ThiAPEg7AvWCjY8BU" width="70%">

### Hospital Registration
<img src="https://drive.google.com/uc?export=view&id=1v3yBZXFDC6v0qPXpxvIrIC4QgGFJHyEQ" width="70%">

### Hospital Homepage
<img src="https://drive.google.com/uc?export=view&id=1KVQA3e4390ADbQ2C3OdqZ8xFL_tfK99_" width="70%">

### Report Update
<img src="https://drive.google.com/uc?export=view&id=16toZ7FzI-lDdgfqRFKVd3snHUTFkTW2_" width="70%">

### Timeline of Patient
<img src="https://drive.google.com/uc?export=view&id=10e3FehULdczK5ygcD3ziNIJTiuYzKfQB" width="70%">

### Donor Api
<img src="https://drive.google.com/uc?export=view&id=1P78IuAXMh_Q8UklGBHOprcPmsBL7WTe5" width="70%">

### Historian
The historian records is the ledger we are maintaining using the blockchain.  It is an immutable and tamper proof records which are stored in the blockchain. It maintains all the records regarding the transactions performed in the network and all the commitment to the ledger.
<img src="https://drive.google.com/uc?export=view&id=18uFixIFmz7skTotqDQaI8JxO3AWzf-VM" width="70%">


## To run the project
- Start hyperledger fabric by 
```
./startFabric.sh
```
- Create a peer admin card
```
./createPeerAdminCard.sh
```
- Install the PeerAdmin card to .bna file
```
composer network install --card PeerAdmin@hlfv1 -a organ-donation-chain.bna
```
- composer network start 
```
composer network start -c PeerAdmin@hlfv1 -n organ-donation-chain -V <Version> -A admin -S adminpw
```
- Composer card import
```
composer card import -f admin@organ-donation-chain.card
```
- To launch Rest server
```
composer-rest-server
```
- To start React Application go to dir Organ-Donation-Chain/OrganChain/client_src/ 
and run
```
npm start
```
