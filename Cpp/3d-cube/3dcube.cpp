#include<iostream.h>
#include<conio.h>
void main()
{
 int n=7,m=5,i,j,k;
 clrscr();
 cout<<"Enter cube size: ";
 cin>>n;
 m=n/2;
 k=n+m-1;
 for(i=1;i<=k;i++)
 {
  for(j=1;j<=k&&j<=n+i-1;j++)
  {
   if(i>n&&j==i-n+1||i>n&&j==i||i>=m&&j==m||i>=m&&j==k||i==k&&j>=m||i==1||j==1&&i<=n||j==i&&i<=m||j==n&&i<=n||j==n+i-1&&i<=m||i==n&&j<=n||i==m&&j>=m)
   {
    cout<<"* ";
   }
   else
   {
    cout<<"  ";
   }
  }
  cout<<endl;
 }
 getch();
}