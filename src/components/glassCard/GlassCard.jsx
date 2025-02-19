
import './GlassCard.css'

function GlassCard({children, type}) {
  return (
    <div className={`${type} glass-card col-12 col-md-10 col-lg-6 p-3`}>
        {children}
    </div>
  )
}

export default GlassCard
