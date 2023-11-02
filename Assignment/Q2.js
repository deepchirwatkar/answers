function groupAnagrams(strs) {
    const anagramGroups = new Map();
  
    for (const str of strs) {
    
      const sortedStr = str.split('').sort().join('');
  
     
      if (!anagramGroups.has(sortedStr)) {
        anagramGroups.set(sortedStr, []);
      }
  
 
      anagramGroups.get(sortedStr).push(str);
    }
  

    return Array.from(anagramGroups.values());
  }
  
  
  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const groupedAnagrams = groupAnagrams(strs);
  console.log(groupedAnagrams);
  