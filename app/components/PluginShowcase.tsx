import React from 'react';

function CodeHover({ children, signature, doc }: { children: React.ReactNode, signature: string, doc: string }) {
  return (
    <span className="group relative cursor-pointer inline-block">
      {children}
      <div className="fixed bottom-auto left-auto mb-2 hidden min-w-[320px] max-w-[450px] rounded-md border border-border-color bg-bg-secondary p-4 text-xs shadow-2xl group-hover:block text-left whitespace-normal -translate-y-full" style={{ zIndex: 2147483647 }}>
        <div className="font-mono text-primary border-b border-border-color pb-2 mb-2">
          {signature}
        </div>
        <div className="text-text-secondary leading-relaxed">
          {doc}
        </div>
        <div className="absolute left-4 -bottom-1.5 h-3 w-3 rotate-45 border-b border-r border-border-color bg-bg-secondary"></div>
      </div>
    </span>
  );
}

export function PluginShowcase() {
  return (
    <section className="py-24 bg-bg-primary sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Extensibility</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Powerful Plugin System
          </p>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Extend Inkdown with a simple and powerful API.
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl relative">
          {/* Background gradient blur effect */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl blur-3xl" />
          
          <div className="relative p-8 bg-bg-sidebar/80 backdrop-blur-sm rounded-2xl border border-border-color shadow-xl">
            <pre className="font-mono text-base leading-relaxed text-text-primary">
              <code>
                <span className="text-syntax-keyword">import</span> <span className="text-text-primary">{`{`}</span>{` `}
                <CodeHover 
                  signature="abstract class Plugin" 
                  doc="Plugin extends Component. Provides: app: App, manifest: PluginManifest, enabled: boolean"
                >
                  <span className="text-syntax-class">Plugin</span>
                </CodeHover>
                {` `}<span className="text-text-primary">{`}`}</span> <span className="text-syntax-keyword">from</span> <span className="text-syntax-string">'inkown-api'</span><span className="text-text-primary">{`;`}</span>
                {`

`}
                <span className="text-syntax-keyword">export</span> <span className="text-syntax-keyword">default</span> <span className="text-syntax-keyword">class</span> <span className="text-syntax-class">MyPlugin</span> <span className="text-syntax-keyword">extends</span>{` `}
                <CodeHover 
                  signature="abstract class Plugin" 
                  doc="Plugin extends Component. Provides: app: App, manifest: PluginManifest, enabled: boolean"
                >
                  <span className="text-syntax-class">Plugin</span>
                </CodeHover>
                {` `}<span className="text-text-primary">{`{`}</span>
                {`
  `}
                <CodeHover 
                  signature="onload(): Promise<void>" 
                  doc="Lifecycle method called when plugin loads. Returns Promise<void>. Use to register commands, views, and settings."
                >
                  <span className="text-syntax-function">onload</span>
                </CodeHover>
                <span className="text-text-primary">()</span> <span className="text-text-primary">{`{`}</span>
                {`
    `}
                <span className="text-[#6a9955]">// Register a new command</span>
                {`
    `}
                <span className="text-syntax-keyword">this</span><span className="text-text-primary">.</span>
                <CodeHover 
                  signature="addCommand(command: Command): Command" 
                  doc="Command: { id: string, name: string, callback?: () => void, editorCallback?: (editor: IEditor) => void, hotkeys?: Hotkey[] }"
                >
                  <span className="text-syntax-function">addCommand</span>
                </CodeHover>
                <span className="text-text-primary">({`{`}</span>
                {`
      `}
                <span className="text-syntax-punctuation">id:</span> <span className="text-syntax-string">'hello-world'</span><span className="text-text-primary">,</span>
                {`
      `}
                <span className="text-syntax-punctuation">name:</span> <span className="text-syntax-string">'Say Hello'</span><span className="text-text-primary">,</span>
                {`
      `}
                <span className="text-syntax-function">callback</span><span className="text-text-primary">:</span> <span className="text-text-primary">()</span> <span className="text-syntax-operator">=&gt;</span> <span className="text-text-primary">{`{`}</span>
                {`
        `}
                <span className="text-syntax-class">console</span><span className="text-text-primary">.</span><span className="text-syntax-function">log</span><span className="text-text-primary">(</span><span className="text-syntax-string">'Hello from Inkdown!'</span><span className="text-text-primary">);</span>
                {`
      `}
                <span className="text-text-primary">{`}`}</span>
                {`
    `}
                <span className="text-text-primary">{`});`}</span>
                {`
  `}
                <span className="text-text-primary">{`}`}</span>
                {`
`}
                <span className="text-text-primary">{`}`}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
