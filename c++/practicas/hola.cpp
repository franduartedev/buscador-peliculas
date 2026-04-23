#include <iostream>
using namespace std;
int main ()
{
    for ( int i = 15; i > 0; i--)
    {
     cout<< i--<< ",";
     if(i%2==0){
        i--;
     }
    }
    
    return 0;
}
