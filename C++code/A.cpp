#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;

const int N = 3e5 + 10, mod = 998244353;
int a[N];

int f(int l, int r)
{
    int res = 0;
    for (int i = l; i <= r; i++)
        res = res ^ a[i];

    return res;
}
int main()
{
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++)
        scanf("%d", &a[i]);
    int res = 0;
    for (int i = 1; i <= n; i++)
        for (int j = i; j <= n; j++)
        {
            res += (f(i, j) * (j - i + 1)) % mod;
            cout << f(i, j) << "    ";
        }
    puts("");
    cout << res << endl;

    return 0;
}