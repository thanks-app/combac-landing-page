import AnimatedText from "../../../../components/animatedText";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import { getAssetPath } from "../../../../utils/assets";

function AiFeature() {
  const {
    home: { aiFeature },
  } = useContext(ConfigContext)!;
  if (!aiFeature) return null;

  return (
    <section id={aiFeature.id} className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {aiFeature.badge && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {aiFeature.badge}
              </motion.span>
            )}
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              <AnimatedText text={aiFeature.title} />
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-base-content/70 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {aiFeature.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-base-200/50 backdrop-blur-sm rounded-xl border border-primary/10">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="text-sm font-medium">Smart Insights</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-base-200/50 backdrop-blur-sm rounded-xl border border-primary/10">
                <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                <span className="text-sm font-medium">Predictive Analytics</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 p-8 md:p-12 glass rounded-[2.5rem] border-white/20 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              <img
                src={getAssetPath(aiFeature.image)}
                alt="AI Insight"
                className="w-64 md:w-80 mx-auto relative z-10 drop-shadow-[0_20px_50px_rgba(var(--p),0.3)] animate-float"
              />
              
              <div className="mt-8 space-y-4 relative z-10">
                <div className="h-2 w-3/4 bg-primary/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
                <div className="h-2 w-1/2 bg-secondary/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </div>
            </div>
            
            {/* Floating particles */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 blur-2xl rounded-full"
            />
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 blur-2xl rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AiFeature;
