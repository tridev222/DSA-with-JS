let left = 0, right = s.length - 1;

    while (left < right) {
  
        while (left < right && !s[left].match(/[a-z0-9]/i)) left++;
        while (left < right && !s[right].match(/[a-z0-9]/i)) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++; 
        right--; 
    }

    return true;