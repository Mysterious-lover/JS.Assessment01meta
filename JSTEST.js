class NFT:
    def __init__(self, name, description, image_url):
        self.name = name
        self.description = description
        self.image_url = image_url

nft_collection = []  # variable to hold a list of NFTs

def mintNFT(name, description, image_url):
    new_nft = NFT(name, description, image_url)
    nft_collection.append(new_nft)

def listNFTs():
    for nft in nft_collection:
        print(f"Name: {nft.name}")
        print(f"Description: {nft.description}")
        print(f"Image URL: {nft.image_url}")
        print("---")

def getTotalSupply():
    return len(nft_collection)

mintNFT("NFT 1", "This is my first NFT", "https://example.com/nft1.png")
mintNFT("NFT 2", "This is my second NFT", "https://example.com/nft2.png")

listNFTs()

print(f"Total Supply: {getTotalSupply()}")
