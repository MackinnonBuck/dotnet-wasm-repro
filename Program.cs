using System.Runtime.InteropServices.JavaScript;
using System.Threading.Tasks;

JS.Log("Started...");
await JS.GetEmptyPromiseAsync();
JS.Log("Complete, reloading...");
JS.Reload();

partial class JS
{
    [JSImport("log", "main.js")]
    internal static partial void Log(string message);

    [JSImport("getEmptyPromise", "main.js")]
    internal static partial Task GetEmptyPromiseAsync();

    [JSImport("globalThis.location.reload")]
    internal static partial void Reload();
}
